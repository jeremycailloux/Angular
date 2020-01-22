import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { FormuleListComponent } from './formule-list/formule-list.component';
import { FormuleDetailsComponent } from './formule-details/formule-details.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoggingComponent } from './logging/logging.component';
import { PaiementComponent } from './paiement/paiement.component';
import { AboutComponent } from './about/about.component';
import { GererMesVoyagesComponent } from './gerer-mes-voyages/gerer-mes-voyages.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientDetailsComponent,
    FormuleListComponent,
    FormuleDetailsComponent,
    FormulaireComponent,
    MenuComponent,
    FooterComponent,
    LoggingComponent,
    PaiementComponent,
    AboutComponent,
    GererMesVoyagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
