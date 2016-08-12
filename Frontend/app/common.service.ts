import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Class } from './Class';
import { Member } from './Member';

@Injectable()
export class CommonService {

    apiUrlClass: string = 'http://172.16.3.85/Quiz/api/Class';
    apiUrlContact: string = 'http://172.16.3.85/Quiz/api/Contact';
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getClass() {

        return this.http.get(this.apiUrlClass + '?userid=sylvia', this.options)
            .map((value: any) => {
                return value.json();
            });
    }

    getMember(classId: string) {

        return this.http.get(this.apiUrlContact + '/byclass/' + classId, this.options)
            .map((value: any) => {
                return value.json();
            });
    }

    postClass(model: Class) {
        

        return this.http.post(this.apiUrlClass + '/', JSON.stringify(model), this.options);
    }

    getClassById(id: any) {

        return this.http.get(this.apiUrlClass + '/' + id, this.options)
            .map((value: any) => {
                return value.json();
            });
    }

    updateClassById(model: Class) {
        console.log(JSON.stringify(model));
        return this.http.put(this.apiUrlClass + '/' + model.ClassId, JSON.stringify(model), this.options);
    }


    postMember(model: Member) {
        console.log(JSON.stringify(model));
        return this.http.post(this.apiUrlContact, JSON.stringify(model), this.options);
    }

    getMemberById(memberId: string) {
        return this.http.get(this.apiUrlContact + '/' + memberId, this.options)
            .map((value: any) => {
                return value.json();
            });
    }

    updateMemberById(model: Member) {
        console.log(JSON.stringify(model));
        return this.http.put(this.apiUrlContact + '/' + model.ContactId, JSON.stringify(model), this.options);
    }

    deleteClass(id: string) {

        return this.http.delete(this.apiUrlClass + '/' + id);
    }

    deleteMember(id: string) {
        return this.http.delete(this.apiUrlContact + '/' + id);
    }
}