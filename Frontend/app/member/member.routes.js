"use strict";
var index_1 = require('./memberRoot/index');
var index_2 = require('./memberList/index');
var index_3 = require('./memberAction/index');
exports.memberRoutes = [
    {
        path: '',
        redirectTo: '/memberRoot',
        pathMatch: 'full'
    },
    {
        path: 'memberRoot',
        component: index_1.MemberRootComponent,
        children: [
            {
                path: ':id',
                component: index_3.MemberActionComponent
            },
            {
                path: '',
                component: index_2.MemberListComponent
            }
        ]
    }
];
//# sourceMappingURL=member.routes.js.map