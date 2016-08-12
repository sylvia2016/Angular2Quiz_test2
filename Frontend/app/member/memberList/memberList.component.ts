import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { Class } from '../../Class.ts';
import { Member } from '../../Member.ts';
import { Router, ActivatedRoute }  from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-memberList',
    templateUrl: 'memberList.component.html',
    styleUrls: ['memberList.component.css']
})
export class MemberListComponent implements OnInit {

    aryClass: Class[] = [];
    selectedId: string;
    aryMember: Member[] = [];

    constructor(
        private common: CommonService,
        private router: Router) { }

    ngOnInit() {
        this.getClass();
    }

    getClass() {
        this.common.getClass().subscribe(
            (value: any) => {
                this.aryClass = value;
                if (this.aryClass.length > 0) {
                    this.selectedId = this.aryClass[0].ClassId;
                }
            },
            (err: any) => { },
            () => {
                if (this.selectedId != undefined) {
                    this.getMember();
                }
            }
        )
    }

    doselect() {
        this.getMember();
    }

    getMember() {
        if (this.selectedId != "") {
            this.common.getMember(this.selectedId).subscribe(
                (value: any) => { this.aryMember = value; },
                (err: any) => { },
                () => { }
            )
        }
    }

    modify(m: Member) {
        this.router.navigate(['memberRoot', m.ContactId]);
    }

    go() {
        //因為:id 是必要參數，所以要丟值過去
        this.router.navigate(['memberRoot', "new", { classid: this.selectedId}]);
    }


}
