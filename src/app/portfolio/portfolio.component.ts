import { Component } from '@angular/core';
import {
   faInfoCircle,
   faBriefcase,
   faUniversity,
   faMeteor,
   faAward,
   faSearch,
   faGraduationCap,
   faLaptopCode,
   faCalendarAlt,
   faHome,
   faEnvelope,
   faMotorcycle,
   faFileDownload
} from '@fortawesome/free-solid-svg-icons';

import {
   faTwitter,
   faTelegram,
   faLinkedin,
   faSkype
} from '@fortawesome/free-brands-svg-icons';

@Component({
   selector: 'app-portfolio',
   templateUrl: './portfolio.component.html',
   styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

   /** Icona info circolare */
   faInfoCircle = faInfoCircle;

   /** Icona borsa */
   faBriefcase = faBriefcase;

   /** Icona università */
   faUniversity = faUniversity;

   /** Icona meteora */
   faMeteor = faMeteor;

   /** Icona premio */
   faAward = faAward;

   /** Icona cerca */
   faSearch = faSearch;

   /** Icona cappello di laurea */
   faGraduationCap = faGraduationCap;

   /** Icona laptop */
   faLaptopCode = faLaptopCode;

   /** Icona calendario */
   faCalendarAlt = faCalendarAlt;

   /** Icona casa */
   faHome = faHome;

   /** Icona mail */
   faEnvelope = faEnvelope;

   /** Icona moto */
   faMotorcycle = faMotorcycle;

   /** Icona Twitter */
   faTwitter = faTwitter;

   /** Icona Telegram */
   faTelegram = faTelegram;

   /** Icona Twitter */
   faLinkedin = faLinkedin;

   /** Icona Skype */
   faSkype = faSkype;

   /** Icona download */
   faFileDownload = faFileDownload;

   constructor() { }

   scaricaCurriculumVitae() {
      alert('Sta arrivando');
   }

}
