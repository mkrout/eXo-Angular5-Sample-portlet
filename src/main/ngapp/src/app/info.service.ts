import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Info } from './info';

@Injectable()
export class InfoService {
    url = "http://localhost:8080/rest/platform/info/";
    constructor(private http: Http) { }
    getInfosWithObservable(): Observable<Info> {
        return this.http.get(this.url)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
    }

    private extractData(res: Response) {
        const body = res.json();
        return body;
    }
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}
