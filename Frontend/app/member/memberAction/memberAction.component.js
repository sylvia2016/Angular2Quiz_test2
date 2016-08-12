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
var Member_1 = require('../../Member');
var common_service_1 = require('../../common.service');
var router_1 = require('@angular/router');
var MemberActionComponent = (function () {
    function MemberActionComponent(common, router, route) {
        this.common = common;
        this.router = router;
        this.route = route;
        this.aryMember = [];
        this.isModify = false;
        this.model = new Member_1.Member();
        this.aryClass = [];
    }
    MemberActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.classId = params['classid'];
            _this.memberId = params['id'];
            if (_this.classId != null && _this.classId != '' && _this.classId != undefined) {
                _this.model.ClassId = _this.classId; //為了新增用，要先把classId塞到model裡面
            }
        });
        if (this.memberId != "new") {
            //修改
            this.isModify = true;
            this.getMemberById();
        }
        else {
            //新增
            this.isModify = false;
            this.getClassById(this.classId);
        }
    };
    MemberActionComponent.prototype.getMemberById = function () {
        var _this = this;
        this.common.getMemberById(this.memberId).subscribe(function (value) {
            _this.model = value;
        }, function (err) { }, function () {
            _this.getClassById(_this.model.ClassId);
        });
    };
    MemberActionComponent.prototype.getClassById = function (classId) {
        var _this = this;
        this.common.getClassById(classId).subscribe(function (value) {
            _this.aryClass = value;
        });
    };
    MemberActionComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.isModify) {
            alert(this.model);
            //修改
            this.common.updateMemberById(this.model).subscribe(function (data) { }, function (err) { alert(err._body); }, function () {
                _this.go('');
            });
        }
        else {
            //新增
            console.log(this.model);
            this.common.postMember(this.model).subscribe(function (data) { }, function (err) { alert(err._body); }, function () {
                _this.go('');
            });
        }
    };
    MemberActionComponent.prototype.go = function (place) {
        this.router.navigate([place]);
    };
    MemberActionComponent.prototype.deleteMember = function () {
        var _this = this;
        if (confirm('確定要將聯絡人「' + this.model.Name + '」刪除？') == true) {
            this.common.deleteMember(this.model.ContactId)
                .subscribe(function (data) { }, function (err) { alert(err._body); }, function () {
                _this.go('memberRoot');
            });
        }
    };
    MemberActionComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MemberActionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-memberAction',
            templateUrl: 'memberAction.component.html',
            styleUrls: ['memberAction.component.css']
        }), 
        __metadata('design:paramtypes', [common_service_1.CommonService, router_1.Router, router_1.ActivatedRoute])
    ], MemberActionComponent);
    return MemberActionComponent;
}());
exports.MemberActionComponent = MemberActionComponent;
//# sourceMappingURL=memberAction.component.js.map