import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'portfolio';

   // TODO Aggiornare ad Angular 11 -> https://update.angular.io/?v=10.0-11.0
   // TODO Aggiornare ad Angular 12 -> https://update.angular.io/?v=11.0-12.0
   constructor(public router: Router) {
   }
}


