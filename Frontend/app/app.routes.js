"use strict";
var router_1 = require('@angular/router');
var class_routes_1 = require('./class/class.routes');
var member_routes_1 = require('./member/member.routes');
var can_deactivate_guard_service_1 = require('./can-deactivate-guard.service');
exports.routes = class_routes_1.classRoutes.concat(member_routes_1.memberRoutes);
exports.appRouterProviders = [
    router_1.provideRouter(exports.routes),
    can_deactivate_guard_service_1.CanDeactivateGuard
];
//# sourceMappingURL=app.routes.js.map