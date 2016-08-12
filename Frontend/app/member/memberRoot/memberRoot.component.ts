import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { MemberListComponent } from '../memberList/index';
import { MemberActionComponent } from '../memberAction/index';

@Component({
  moduleId: module.id,
  selector: 'app-memberRoot',
  templateUrl: 'memberRoot.component.html',
  styleUrls: ['memberRoot.component.css'],
  directives: [
      ROUTER_DIRECTIVES]
})
export class MemberRootComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
