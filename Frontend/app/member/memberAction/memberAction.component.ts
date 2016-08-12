import { Component, OnInit, OnDestroy } from '@angular/core';
import { Member } from '../../Member';
import { CommonService }  from '../../common.service';
import { Router, ActivatedRoute }  from '@angular/router';
import { NgForm }    from '@angular/forms';
import { Class } from '../../Class';

@Component({
    moduleId: module.id,
    selector: 'app-memberAction',
    templateUrl: 'memberAction.component.html',
    styleUrls: ['memberAction.component.css']
})
export class MemberActionComponent implements OnInit {

    private sub: any;
    aryMember: Member[] = [];
    memberId: string;
    isModify: boolean = false;
    model: any = new Member();
    aryClass: Class[] = [];
    classId: string;

    constructor(
        private common: CommonService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            (params) => {
                this.classId = params['classid'];
                this.memberId = params['id'];
                if (this.classId != null && this.classId != '' && this.classId != undefined) {
                    this.model.ClassId = this.classId;  //���F�s�W�ΡA�n����classId���model�̭�
                }                
            }
        );

        if (this.memberId != "new") {
            //�ק�
            this.isModify = true;
            this.getMemberById();
        } else {
            //�s�W
            this.isModify = false;
            this.getClassById(this.classId);
        }
    }

    getMemberById() {
        this.common.getMemberById(this.memberId).subscribe(
            (value: any) => {
                this.model = value;
            },
            (err: any) => { },
            () => {
                this.getClassById(this.model.ClassId);
            }                
        );
    }

    getClassById(classId: string) {
        this.common.getClassById(classId).subscribe((value: any) => {
            this.aryClass = value;
        });
    }

    onSubmit() {
        if (this.isModify) {
            alert(this.model);
            //�ק�
            this.common.updateMemberById(this.model).subscribe(
                (data: any) => { },
                (err: any) => { alert(err._body); },
                () => {
                    this.go('');
                }
            );
        } else {
            //�s�W
            console.log(this.model);
            this.common.postMember(this.model).subscribe(
                (data: any) => { },
                (err: any) => { alert(err._body); },
                () => {
                    this.go('');
                }
            );
        }
    }

    go(place: string) {
        this.router.navigate([place]);
    }

    deleteMember() {
        if (confirm('�T�w�n�N�p���H�u' + this.model.Name + '�v�R���H') == true) {
            this.common.deleteMember(this.model.ContactId)
                .subscribe(
                (data: any) => { },
                (err: any) => { alert(err._body); },
                () => {
                    this.go('memberRoot');
                }
            );
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
