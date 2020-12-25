import {PaginaNonTrovataComponent} from './pagina-non-trovata/pagina-non-trovata.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
   {
      path: '',
      component: PortfolioComponent
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
export class AppRoutingModule {
}
