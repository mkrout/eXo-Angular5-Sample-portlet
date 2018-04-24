import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

import { InfoService } from '../../services/info.service';
import { Info } from '../../services/info';

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
        console.log('test click');
        // this.loading = false;
        this.observableInfos.subscribe(
            info => this.info = info,
            error =>  this.errorMessage = <any>error);
   }

}
