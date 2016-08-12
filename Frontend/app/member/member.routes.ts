import { provideRouter, RouterConfig }  from '@angular/router';
import { MemberRootComponent } from './memberRoot/index';
import { MemberListComponent } from './memberList/index';
import { MemberActionComponent } from './memberAction/index';
import { CanDeactivateGuard }    from '../can-deactivate-guard.service';


export const memberRoutes: RouterConfig = [
    {
        path: '',
        redirectTo: '/memberRoot',
        pathMatch: 'full'
    },
    {
        path: 'memberRoot',
        component: MemberRootComponent,
        children: [
            {
                path: ':id',
                component: MemberActionComponent
            },
            {
                path: '',
                component: MemberListComponent
}
        ]
    }
];