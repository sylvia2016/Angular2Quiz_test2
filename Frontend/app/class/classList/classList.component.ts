import { Component, OnInit, Input } from '@angular/core';
import { Class } from '../../Class';
import { CommonService }  from '../../common.service';
import { Router }  from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-classList',
  templateUrl: 'classList.component.html',
  styleUrls: ['classList.component.css']
})
export class ClassListComponent implements OnInit {

    aryClass: Class[] = [];
    //private selectedId: string;

    constructor(private common: CommonService, private router: Router) { }

    ngOnInit() {
        this.getClass();
    }

    getClass() {
        this.common.getClass().subscribe(
            (value: any) => { this.aryClass = value; },
            (err: any) => { alert(err._body); },
            () => { }
        );
    }

    go(place: string) {
        this.router.navigate(['/' + place]);
    }

    modify(c: Class) {
        this.router.navigate(['/classAction', c.ClassId]);
    }

    //isSelected(c: Class) { return c.ClassId === this.selectedId; }
}
