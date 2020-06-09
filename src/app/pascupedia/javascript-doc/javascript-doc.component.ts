import { Component } from '@angular/core';

@Component({
   selector: 'app-javascript-doc',
   templateUrl: './javascript-doc.component.html',
   styleUrls: ['./javascript-doc.component.css']
})
export class JavascriptDocComponent {


   codeClass = `class marker {
   var nomeVar;
   constructor(var, ...){
      this.nomeVar = var;
   }
};`;

   codeObject = `const marker = {
   id: 1, coords: {
      lat: 100, lng: 100
   }
};`;

   constructor() { }

}
