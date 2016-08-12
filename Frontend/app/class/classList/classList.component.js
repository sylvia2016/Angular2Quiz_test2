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
var ClassListComponent = (function () {
    //private selectedId: string;
    function ClassListComponent(common, router) {
        this.common = common;
        this.router = router;
        this.aryClass = [];
    }
    ClassListComponent.prototype.ngOnInit = function () {
        this.getClass();
    };
    ClassListComponent.prototype.getClass = function () {
        var _this = this;
        this.common.getClass().subscribe(function (value) { _this.aryClass = value; }, function (err) { alert(err._body); }, function () { });
    };
    ClassListComponent.prototype.go = function (place) {
        this.router.navigate(['/' + place]);
    };
    ClassListComponent.prototype.modify = function (c) {
        this.router.navigate(['/classAction', c.ClassId]);
    };
    ClassListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-classList',
            templateUrl: 'classList.component.html',
            styleUrls: ['classList.component.css']
        }), 
        __metadata('design:paramtypes', [common_service_1.CommonService, router_1.Router])
    ], ClassListComponent);
    return ClassListComponent;
}());
exports.ClassListComponent = ClassListComponent;
//# sourceMappingURL=classList.component.js.map