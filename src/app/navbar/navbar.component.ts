import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

   /** Icona libro */
   faBook = faBook;

   /** Percorso risorse */
   avatar = environment.resourcesPath + 'avataaars.png';

   constructor() { }

}
