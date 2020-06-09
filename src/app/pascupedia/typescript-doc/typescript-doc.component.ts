import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-typescript-doc',
   templateUrl: './typescript-doc.component.html',
   styleUrls: ['./typescript-doc.component.css']
})
export class TypescriptDocComponent implements OnInit {

   response: any = {};
   lineNumbers: boolean = true;
   languages: string[] = ['typescript'];
   codeFunction: string = `function add(left: number, right: number): number {
      return left + right;
}`;

   codeClass: string = `class Person {
      private name: string;
      private age: number;

      constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
      }

      toString(): string {
          return this.name + " (" + this.age + ") ";
      }
}`;

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
