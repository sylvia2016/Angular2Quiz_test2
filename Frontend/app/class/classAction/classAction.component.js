"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Class_1 = require('../../Class');
var common_service_1 = require('../../common.service');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/fromPromise');
var dialog_service_1 = require('../../dialog.service');
var ClassActionComponent = (function () {
    function ClassActionComponent(common, router, route, dialogService) {
        this.common = common;
        this.router = router;
        this.route = route;
        this.dialogService = dialogService;
        this.aryClass = [];
        this.isModify = false;
        this.model = new Class_1.Class();
        this.needDialog = true;
    }
    ClassActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) { _this.classId = params['id']; }, function (err) { alert(err._body); }, function () { });
        if (this.classId != '' && this.classId != undefined) {
            //修改
            this.isModify = true;
            this.getClassById();
        }
        else {
            //新增
            this.isModify = false;
        }
    };
    ClassActionComponent.prototype.getClassById = function () {
        var _this = this;
        this.common.getClassById(this.classId).subscribe(function (value) {
            //this.aryClass = value;
            _this.model = value;
            _this.originName = _this.model.Name; //先儲存一進來的值，以便guard判斷
        });
    };
    ClassActionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.needDialog = false;
        if (this.isModify) {
            //修改
            this.common.updateClassById(this.model).subscribe(function (data) { }, function (err) { alert(err._body); }, function () {
                _this.go('classList');
            });
        }
        else {
            //新增
            this.common.postClass(this.model).subscribe(function (data) { }, function (err) { alert(err._body); }, function () {
                _this.go('classList');
            });
        }
    };
    ClassActionComponent.prototype.go = function (place) {
        this.router.navigate(['/' + place]);
    };
    ClassActionComponent.prototype.cancelGo = function (place) {
        this.router.navigate(['/' + place]);
    };
    ClassActionComponent.prototype.deleteClass = function () {
        var _this = this;
        if (confirm('確定要將「' + this.model.Name + '」刪除？') == true) {
            this.needDialog = false;
            this.common.deleteClass(this.model.ClassId)
                .subscribe(function (data) { }, function (err) { alert(err._body); }, function () {
                _this.go('classList');
            });
        }
    };
    ClassActionComponent.prototype.canDeactivate = function () {
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
        var p = this.dialogService.confirm('您有修改尚未儲存，確定要離開嗎？');
        var o = Observable_1.Observable.fromPromise(p);
        return o;
    };
    ClassActionComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClassActionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-classAction',
            templateUrl: 'classAction.component.html',
            styleUrls: ['classAction.component.css']
        }), 
        __metadata('design:paramtypes', [common_service_1.CommonService, router_1.Router, router_1.ActivatedRoute, dialog_service_1.DialogService])
    ], ClassActionComponent);
    return ClassActionComponent;
}());
exports.ClassActionComponent = ClassActionComponent;
//# sourceMappingURL=classAction.component.js.map