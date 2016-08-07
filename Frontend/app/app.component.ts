import { Component } from '@angular/core';
import {SampleComponent} from './sample/index'

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><app-sample></app-sample>',
    directives: [SampleComponent]

})
export class AppComponent { }
