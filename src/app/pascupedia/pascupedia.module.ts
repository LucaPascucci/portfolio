import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDocComponent } from './angular-doc/angular-doc.component';
import { PascupediaHomeComponent } from './pascupedia-home/pascupedia-home.component';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
   declarations: [
      PascupediaHomeComponent,
      AngularDocComponent,
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
