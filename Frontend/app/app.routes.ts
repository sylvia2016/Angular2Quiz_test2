import { provideRouter, RouterConfig }  from '@angular/router';
import { classRoutes } from './class/class.routes';
import { memberRoutes } from './member/member.routes';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

export const routes: RouterConfig = [
    ...classRoutes,
    ...memberRoutes
    //{ path: 'memberList', component: MemberListComponent },
    //{ path: '', component: MemberListComponent },
    //{ path: '**', component: MemberListComponent }

];

export const appRouterProviders = [
    provideRouter(routes),
    CanDeactivateGuard
];