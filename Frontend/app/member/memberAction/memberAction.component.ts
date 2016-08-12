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
                    this.model.ClassId = this.classId;  //為了新增用，要先把classId塞到model裡面
                }                
            }
        );

        if (this.memberId != "new") {
            //修改
            this.isModify = true;
            this.getMemberById();
        } else {
            //新增
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
            //修改
            this.common.updateMemberById(this.model).subscribe(
                (data: any) => { },
                (err: any) => { alert(err._body); },
                () => {
                    this.go('');
                }
            );
        } else {
            //新增
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
        if (confirm('確定要將聯絡人「' + this.model.Name + '」刪除？') == true) {
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
