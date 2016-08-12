"use strict";
var index_1 = require('./classList/index');
var index_2 = require('./classAction/index');
var can_deactivate_guard_service_1 = require('../can-deactivate-guard.service');
exports.classRoutes = [
    { path: 'classList', component: index_1.ClassListComponent },
    { path: 'classAction', component: index_2.ClassActionComponent },
    { path: 'classAction/:id', component: index_2.ClassActionComponent, canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard] }
];
//# sourceMappingURL=class.routes.js.map