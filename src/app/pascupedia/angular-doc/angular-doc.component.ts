import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-angular-doc',
   templateUrl: './angular-doc.component.html',
   styleUrls: ['./angular-doc.component.css']
})
export class AngularDocComponent implements OnInit {

   active = 1;
   lineNumbers = true;

   codeModule = `@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      PortfolioComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      PascupediaModule
   ],
   providers: [ServizioGlobale],
   bootstrap: [AppComponent]
})
export class AppModule { }`;

   codeModuleExport = `@NgModule({
   declarations: [
      CustomComponent
   ],
   imports: [
      CommonModule,
   ],
   export: [CustomComponent],
   providers: [ServizioCustom],
})
export class CustomModule { }`;

   codePropertyBindingFiglio = `...
export class HelloComponent {
   @Input() name: string;
   ...
}`;

   codePropertyBindingPadre = `<app-hello [name]="testo di prova"></app-hello>`;

   codeEventBindingFiglio = `...
   export class HelloComponent {
      @Output() result: new EventEmitter<number>();

      increment(): void {
         this.count++;
         this.result.emit(this.count);
      }
      ...
   }`;

   codeEventBindingPadre = `<app-hello (result)="funzionePadre($event)"></app-hello>`;

   codeStringInterpolation = `<p>{{variabile}}</p>`;

   codePropertyBinding = `<button [disabled] = "variabile">text</button>`;

   codeEventBinding = `<button (click) = "funzione()">text</button>
<!-- oppure -->
<input (input) = "funzione($event)" />`;

   codeTwoWayBindingTypescript = `...
export class HelloComponent {
   variabileTwoWay: string;
   ...
}`;

   codeTwoWayBindingHTML = `<input [(ngModel)] = "variabileTwoWay" />`;

   codeNgIf = `<p *ngIf="condizione; else #elseID"> testo1 </p>
<ng-template #elseID >
   <p> testo2 </p>
</ng-template>`;

   codeNgFor = `<p *ngFor="let item of itemArray"> {{item}} </p>`;

   codeNgSwitch = `<div [ngSwitch]="value">
   <p *ngSwitchCase="5">Value is 5</p>
   <p *ngSwitchCase="10">Value is 10</p>
   <p *ngSwitchDefault>Value is Default</p>
</div>`;

   codeRoutes = `const appRoutes: Routes = [
   { path: 'crisis-center', component: CrisisListComponent },
   { path: 'hero/:id',      component: HeroDetailComponent },
   {
     path: 'heroes',
     component: HeroListComponent,
     data: { title: 'Heroes List' }
   },
   { path: '',
     redirectTo: '/heroes',
     pathMatch: 'full'
   },
   { path: '**', component: PageNotFoundComponent }
 ];

 @NgModule({
   imports: [
     RouterModule.forRoot( appRoutes )
   ],
   ...
 })
 export class AppModule { }`;

   codeRouterAbsolutePath = `<a routerLink="/">testo</a> <!-- URL finale → localhost:4200/-->
<a routerLink="/nomeRoute">testo</a> <!-- URL finale → localhost:4200/nomeRoute-->`;

   codeRouterRelativePath = `<a routerLink="./nomeRoute"> testo</a>
   <!-- URL iniziale (localhost:4200) → URL finale → localhost:4200/nomeRoute -->
   <!-- URL iniziale (localhost:4200/percorso) → URL finale → localhost:4200/percorso/nomeRoute-->`;

   codeRouterSpecialPath = `<a routerLink="../nomeRoute">testo</a>`;

   codeReactiveFormComponent = `export class ArticoloFormReactiveComponent {
   myForm: FormGroup;
   constructor() {
      this.myForm = new FormGroup({
         txtTitolo: new FormControl(),
         txtAutore: new FormControl(),
         txtTesto: new FormControl()
      });
   }
   ...`;

   codeReactiveFormTemplate = `<form [formGroup]="myForm" (submit)="funzioneDiInvioDati">
   <div>
      <label for="txtTitolo">Titolo</label>
      <input type="text" formControlName="txtTitolo">
   </div>
   <div>
      <label for="txtAutore">Autore</label>
      <input type="text" formControlName="txtAutore">
    </div>
    <div>
      <label for="txtTesto">Testo</label>
      <textarea formControlName="txtTesto"></textarea>
    </div>
    <button type="submit">Invia</button>
</form>`;

   codeReactiveFormValues = `   console.log(this.myForm.value);
   console.log(this.myForm.controls["txtTitolo"].value);
   console.log(this.myForm.controls["txtAutore"].value);
   console.log(this.myForm.controls["txtTesto"].value);`;

   codeReactiveFormBuilder = `export class ArticoloFormReactiveComponent {
   constructor(fb: FormBuilder) {
      this.myForm = fb.group({
         txtTitolo: ["", [Validators.required, Validators.maxLength(30)]],
         txtAutore: ["", [Validators.required, Validators.maxLength(20)]],
         txtTesto: ["", [Validators.required, Validators.minLength(2000), Validators.maxLength(5000)]]
      });
   }
}`;

   codeReactiveFormFeedback = `<form [formGroup]="myForm">
   <div>
      <label for="txtTitolo">Titolo</label>
      <input type="text" formControlName="txtTitolo">
      <span [hidden]="myForm.controls.txtTitolo.valid || myForm.controls.txtTitolo.pristine">Il titolo è obbligatorio e non può superare i 30 caratteri!</span>
   </div>
...
</form>`;

   codeReactiveFormValuesChanges = `this.myForm.valueChanges.subscribe(value => {
   this.model.titolo = value.txtTitolo;
   this.model.autore = value.txtAutore;
   this.model.testo = value.txtTesto;
});

oppure

this.myForm.controls["txtTitolo"].valueChanges.subscribe(value => {
   this.model.titolo = value;
});`;


   codeService = `@Injectable()
export class ArticoliService {
   private elencoArticoli: Articolo[];
   constructor() {
      this.elencoArticoli = [{
         titolo: "Creare componenti Angular 2",
         autore: "Mario Rossi",
         numApprezzamenti: 0
      },
      {
         titolo: "Creare servizi Angular 2",
         autore: "Roberto Bianchi",
         numApprezzamenti: 0
      }];
   }
   getArticoli(): Articolo[] {
      return this.elencoArticoli;
   }
   addArticolo(articolo: Articolo) {
      this.elencoArticoli.push(articolo)
   }
}`;

   codeServiceObservable = `@Injectable()
export class ArticoliService {

   constructor(private http: Http) {}

   getArticoli(): Observable<Articolo[]> {
      return this.http
         .get("/api/articoli")
         .map((responseData) => responseData.json());
   }`;

   codeComponentObservable = `articoliService.getArticoli().subscribe(result => {
   this.elencoArticoli = result;
});`;

   constructor() { }

   ngOnInit() { }

}
