import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { InfoService } from './info.service';
import { Info } from './info';

@Component({
   selector: 'app-observable',
   templateUrl: './observable.component.html'
})
export class ObservableComponent implements OnInit { 
   observableInfos: Observable<Info>;
   info: Info;
   errorMessage: String;
   constructor(private infoService: InfoService) { }
   ngOnInit(): void {
        this.observableInfos = this.infoService.getInfosWithObservable();
		this.observableInfos.subscribe(
            info => this.info = info,
            error =>  this.errorMessage = <any>error);
   }
}
    