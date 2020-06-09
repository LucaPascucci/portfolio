import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
   selector: 'app-c-doc',
   templateUrl: './c-doc.component.html',
   styleUrls: ['./c-doc.component.css']
})
export class CDocComponent implements OnInit {

   response: any;
   lineNumbers: boolean = true;
   languages: string[] = ['c'];
   code: string = `#include <stdio.h>
   int main(){
      printf("Hello world!");
      return 0;
   };`;

   constructor() { }

   ngOnInit() { }

   onHighlight(event) {
      console.log(event);
      this.response = {
         language: event.language,
         relevance: event.relevance,
         // second_best: '{...}',
         // top: '{...}',
         // value: '{...}'
      };
   }

}
