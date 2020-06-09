import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDocComponent } from './angular-doc/angular-doc.component';
import { PascupediaHomeComponent } from './pascupedia-home/pascupedia-home.component';
import { RouterModule } from '@angular/router';
import { ObjectOrientedProgrammingComponent } from './object-oriented-programming/object-oriented-programming.component';
import { GoogleCloudPlatformComponent } from './google-cloud-platform/google-cloud-platform.component';
import { JavascriptDocComponent } from './javascript-doc/javascript-doc.component';
import { TypescriptDocComponent } from './typescript-doc/typescript-doc.component';
import { CSharpDocComponent } from './c-sharp-doc/c-sharp-doc.component';
import { ImperativeProgrammingComponent } from './imperative-programming/imperative-programming.component';
import { FunctionalProgrammingComponent } from './functional-programming/functional-programming.component';
import { LogicProgrammingComponent } from './logic-programming/logic-programming.component';
import { ActorProgrammingComponent } from './actor-programming/actor-programming.component';
import { CDocComponent } from './c-doc/c-doc.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { DotNetFrameworkComponent } from './dot-net-framework/dot-net-framework.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
   declarations: [
      PascupediaHomeComponent,
      AngularDocComponent,
      ObjectOrientedProgrammingComponent,
      GoogleCloudPlatformComponent,
      JavascriptDocComponent,
      TypescriptDocComponent,
      CSharpDocComponent,
      ImperativeProgrammingComponent,
      FunctionalProgrammingComponent,
      LogicProgrammingComponent,
      ActorProgrammingComponent,
      CDocComponent,
      DotNetFrameworkComponent,
   ],
   imports: [
      RouterModule,
      CommonModule,
      HighlightModule,
      NgbModule
   ],
   exports: [
      RouterModule
   ]
})
export class PascupediaModule { }
