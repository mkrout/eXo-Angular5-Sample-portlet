import { Component } from '@angular/core';
import { ImportUsersService } from './services/importUsers.service';
import { Observable } from 'rxjs/Observable';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent {
    observableImport: Observable<any>;
    public loading = false;
    createusers = false;
    addusers = false;
    constructor(private importUsersService: ImportUsersService) {}
    importUsers () {
    this.loading = true;
    this.observableImport = this.importUsersService.importUsers(this.createusers, this.addusers);
    this.observableImport.subscribe(res => {this.loading = false; console.log( <any>res); },
    error  => {this.loading = false; console.error('An error occured'); });
    }
}
