import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent {
    public loading = false;
    clickButton () {
        console.log('test click');
    this.loading = true;
    }
}
