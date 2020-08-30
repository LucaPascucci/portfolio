import { PascupediaHomeComponent } from './pascupedia/pascupedia-home/pascupedia-home.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularDocComponent } from './pascupedia/angular-doc/angular-doc.component';

const routes: Routes = [
   {
      path: '',
      component: PortfolioComponent
   },
   {
      path: 'pascupedia',
      children: [
         {
            path: '',
            component: PascupediaHomeComponent
         },
         {
            path: 'angular-doc',
            component: AngularDocComponent,
         },
      ]
   },
   {
      path: '**',
      component: PaginaNonTrovataComponent
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
