import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
   selector: 'app-pascupedia-home',
   templateUrl: './pascupedia-home.component.html',
   styleUrls: ['./pascupedia-home.component.css']
})
export class PascupediaHomeComponent {

   /** Percorso immagine pascupedia */
   pascupedia = environment.resourcesPath + 'PascuPedia.png';

   constructor() { }

}
