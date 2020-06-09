import { DotNetFrameworkComponent } from './pascupedia/dot-net-framework/dot-net-framework.component';
import { CDocComponent } from './pascupedia/c-doc/c-doc.component';
import { ActorProgrammingComponent } from './pascupedia/actor-programming/actor-programming.component';
import { LogicProgrammingComponent } from './pascupedia/logic-programming/logic-programming.component';
import { ImperativeProgrammingComponent } from './pascupedia/imperative-programming/imperative-programming.component';
import { CSharpDocComponent } from './pascupedia/c-sharp-doc/c-sharp-doc.component';
import { TypescriptDocComponent } from './pascupedia/typescript-doc/typescript-doc.component';
import { JavascriptDocComponent } from './pascupedia/javascript-doc/javascript-doc.component';
import { GoogleCloudPlatformComponent } from './pascupedia/google-cloud-platform/google-cloud-platform.component';
import { PascupediaHomeComponent } from './pascupedia/pascupedia-home/pascupedia-home.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularDocComponent } from './pascupedia/angular-doc/angular-doc.component';
import { ObjectOrientedProgrammingComponent } from './pascupedia/object-oriented-programming/object-oriented-programming.component';
import { FunctionalProgrammingComponent } from './pascupedia/functional-programming/functional-programming.component';

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
            path: 'oop-doc',
            component: ObjectOrientedProgrammingComponent,
         },
         {
            path: 'imp-doc',
            component: ImperativeProgrammingComponent,
         },
         {
            path: 'func-doc',
            component: FunctionalProgrammingComponent
         },
         {
            path: 'logic-doc',
            component: LogicProgrammingComponent
         },
         {
            path: 'actor-doc',
            component: ActorProgrammingComponent
         },
         {
            path: 'typescript-doc',
            component: TypescriptDocComponent,
         },
         {
            path: 'javascript-doc',
            component: JavascriptDocComponent,
         },
         {
            path: 'c-sharp-doc',
            component: CSharpDocComponent,
         },
         {
            path: 'c-doc',
            component: CDocComponent,
         },
         {
            path: 'angular-doc',
            component: AngularDocComponent,
         },
         {
            path: 'google-cloud-platform-doc',
            component: GoogleCloudPlatformComponent
         },
         {
            path: 'dot-net',
            component: DotNetFrameworkComponent
         }
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
