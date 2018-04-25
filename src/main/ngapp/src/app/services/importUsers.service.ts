import { UserTableComponent } from './../components/userTableComponent/userTable.component';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { ScvToJsonService } from './scvToJson.service';
import { Observable } from 'rxjs/Observable';

/**
 * @description
 * @class
 */
@Injectable()
export class ImportUsersService {
  url = '/rest/private/importusersrest/importusers';
   constructor(private http: Http, private scvToJsonService: ScvToJsonService) {}

  importUsers(createusers: boolean, addusers: boolean): Observable<any> {
    this.url = this.url + '?creatduplicated=' + createusers + '&addexistingusers=' + addusers;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, this.scvToJsonService.lines, options)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
}
extractData(res: Response) {
  const body = res.json();
  return body || {};
}
handleErrorObservable (error: Response | any) {
  console.error(error.message || error);
  return Observable.throw(error.message || error);
}
}

