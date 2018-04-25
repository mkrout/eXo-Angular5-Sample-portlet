
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ObservableComponent } from './components/ObservableComponent/observable.component';
import { InfoService } from './services/info.service';
import { LoadingModule } from 'ngx-loading';
import { FileUploadComponent} from './components/uploadFileComponent/file-upload.component';
import {ScvToJsonService} from './services/scvToJson.service';
import { UserTableComponent } from './components/userTableComponent/userTable.component';
import { ImportUsersService } from './services/importUsers.service';


@NgModule({
  imports: [
            BrowserModule,
            HttpModule,
            LoadingModule
  ],
  declarations: [
            AppComponent,
            ObservableComponent,
            FileUploadComponent,
            UserTableComponent
  ],
  providers: [
        InfoService,
        ScvToJsonService,
        ImportUsersService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule {

}
