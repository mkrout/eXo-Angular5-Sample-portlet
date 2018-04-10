import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ObservableComponent }  from './observable.component';
import { InfoService } from './info.service';

@NgModule({
  imports: [     
        BrowserModule,
		HttpModule
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
export class AppModule { }
