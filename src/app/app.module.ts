import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PascupediaModule } from './pascupedia/pascupedia.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      PortfolioComponent,
      PaginaNonTrovataComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      FontAwesomeModule,
      PascupediaModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
