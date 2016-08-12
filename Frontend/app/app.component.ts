import { Component, EventEmitter, Output } from '@angular/core';
import { ClassListComponent } from './class/classList/index';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { ClassActionComponent } from './class/classAction/index';
import { MemberRootComponent } from './member/memberRoot/index';
import { MemberListComponent } from './member/memberList/index';
import { MemberActionComponent } from './member/memberAction/index';
import { DialogService }  from './dialog.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    //template: '<h1>My First Angular 2 App</h1><app-sample></app-sample>',
    providers: [DialogService],
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {


    constructor() { }

    ngOnInit() {
        
    }

}
