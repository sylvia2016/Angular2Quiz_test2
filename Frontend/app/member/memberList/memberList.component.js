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
var common_service_1 = require('../../common.service');
var router_1 = require('@angular/router');
var MemberListComponent = (function () {
    function MemberListComponent(common, router) {
        this.common = common;
        this.router = router;
        this.aryClass = [];
        this.aryMember = [];
    }
    MemberListComponent.prototype.ngOnInit = function () {
        this.getClass();
    };
    MemberListComponent.prototype.getClass = function () {
        var _this = this;
        this.common.getClass().subscribe(function (value) {
            _this.aryClass = value;
            if (_this.aryClass.length > 0) {
                _this.selectedId = _this.aryClass[0].ClassId;
            }
        }, function (err) { }, function () {
            if (_this.selectedId != undefined) {
                _this.getMember();
            }
        });
    };
    MemberListComponent.prototype.doselect = function () {
        this.getMember();
    };
    MemberListComponent.prototype.getMember = function () {
        var _this = this;
        if (this.selectedId != "") {
            this.common.getMember(this.selectedId).subscribe(function (value) { _this.aryMember = value; }, function (err) { }, function () { });
        }
    };
    MemberListComponent.prototype.modify = function (m) {
        this.router.navigate(['memberRoot', m.ContactId]);
    };
    MemberListComponent.prototype.go = function () {
        //因為:id 是必要參數，所以要丟值過去
        this.router.navigate(['memberRoot', "new", { classid: this.selectedId }]);
    };
    MemberListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-memberList',
            templateUrl: 'memberList.component.html',
            styleUrls: ['memberList.component.css']
        }), 
        __metadata('design:paramtypes', [common_service_1.CommonService, router_1.Router])
    ], MemberListComponent);
    return MemberListComponent;
}());
exports.MemberListComponent = MemberListComponent;
//# sourceMappingURL=memberList.component.js.map