import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ObservableComponent }  from './observable.component';
import { InfoService } from './info.service';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
        BrowserModule,
		HttpModule,
LoadingModule
  ],
  declarations: [
        AppComponent,
		ObservableComponent
  ],
  providers: [
        InfoService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { 
      
}
