import { Component, OnInit, OnDestroy } from '@angular/core';
import { Class } from '../../Class';
import { CommonService }  from '../../common.service';
import { Router, ActivatedRoute }  from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { DialogService } from '../../dialog.service';

@Component({
  moduleId: module.id,
  selector: 'app-classAction',
  templateUrl: 'classAction.component.html',
  styleUrls: ['classAction.component.css']
})
export class ClassActionComponent implements OnInit {

    private sub: any;
    aryClass: Class[] = [];
    classId: string;
    isModify: boolean = false;
    model: any = new Class();
    originName: string;
    needDialog: boolean = true;

    constructor(
        private common: CommonService,
        private router: Router,
        private route: ActivatedRoute,
        private dialogService: DialogService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            (params) => { this.classId = params['id']; },
            (err) => { alert(err._body); },
            () => { }
        );
        
        if (this.classId != '' && this.classId != undefined) {
            //�ק�
            this.isModify = true;
            this.getClassById();            
        } else {
            //�s�W
            this.isModify = false;
        }
    }

    getClassById() {
        this.common.getClassById(this.classId).subscribe((value: any) => {
            //this.aryClass = value;
            this.model = value;
            this.originName = this.model.Name;  //���x�s�@�i�Ӫ��ȡA�H�Kguard�P�_
        });
    }

    onSubmit() {
        this.needDialog = false;

        if (this.isModify) {
            //�ק�
            this.common.updateClassById(this.model).subscribe(
                (data: any) => { },
                (err: any) => { alert(err._body); },
                () => {
                    this.go('classList');
                }
            );
        } else {
            //�s�W
            this.common.postClass(this.model).subscribe(
                (data: any) => { },
                (err: any) => { alert(err._body); },
                () => {
                    this.go('classList');
                }
            );
        }        
    }
    
    go(place: string) {
        this.router.navigate(['/' + place]);
    }

    cancelGo(place: string) {
        this.router.navigate(['/' + place]);
    }

    deleteClass() {
        if (confirm('�T�w�n�N�u' + this.model.Name + '�v�R���H') == true) {

            this.needDialog = false;

            this.common.deleteClass(this.model.ClassId)
                .subscribe(
                (data: any) => { },
                (err: any) => { alert(err._body); },
                () => {
                    this.go('classList');
                }
            );
        }
    }

    canDeactivate(): Observable<boolean> | boolean {        
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.needDialog) {
            return true;
        }
        else {
            if ((!this.model || this.model.Name === this.originName)) {
                return true;
            }
        }
        
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        let p = this.dialogService.confirm('�z���ק�|���x�s�A�T�w�n���}�ܡH');
        let o = Observable.fromPromise(p);
        
        return o;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
