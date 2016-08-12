import { provideRouter, RouterConfig }  from '@angular/router';
import { ClassListComponent } from './classList/index';
import { ClassActionComponent } from './classAction/index';
import { CanDeactivateGuard }    from '../can-deactivate-guard.service';

export const classRoutes: RouterConfig = [
    { path: 'classList', component: ClassListComponent },
    { path: 'classAction', component: ClassActionComponent },
    { path: 'classAction/:id', component: ClassActionComponent, canDeactivate: [CanDeactivateGuard] }
];
