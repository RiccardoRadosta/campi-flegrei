import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminNavbarComponent } from './modules/admin/admin-navbar/admin-navbar.component'; 
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'

import { AdminHomepageComponent } from './modules/admin/admin-homepage/admin-homepage.component';

import {MatIconModule} from '@angular/material/icon';

import {MatToolbarModule} from '@angular/material/toolbar';
import { ProdottoCardComponent } from './modules/prodotto/prodotto-card/prodotto-card.component';
import { ProdottoViewComponent } from './modules/prodotto/prodotto-view/prodotto-view.component';
import { ProdottoInsertComponent } from './modules/prodotto/prodotto-insert/prodotto-insert.component';
import { ProdottoCreatoComponent } from './shared/prodotto-creato/prodotto-creato.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProdottoEliminatoComponent } from './shared/prodotto-eliminato/prodotto-eliminato.component';
import { ProdottoUpdateComponent } from './modules/prodotto/prodotto-update/prodotto-update.component';
import { ProdottoModificatoComponent } from './shared/prodotto-modificato/prodotto-modificato.component';
import { ImageViewComponent } from './shared/image-view/image-view.component';
import { MatSliderModule } from '@angular/material/slider';
import { StatisticheComponent } from './modules/admin/statistiche/statistiche.component';
import { LoginComponent } from './modules/admin/login/login.component';
import { AutorizzazioneComponent } from './shared/autorizzazione/autorizzazione.component';
import { UserHomepageComponent } from './modules/user/user-homepage/user-homepage.component';
import { UserNavbarComponent } from './modules/user/user-navbar/user-navbar.component';
import { ProdottiUserComponent } from './modules/user/prodotti-user/prodotti-user.component';
import { ProdottoViewUserComponent } from './modules/user/prodotto-view-user/prodotto-view-user.component';









@NgModule({
  declarations: [
    AppComponent,
    AdminNavbarComponent,
    AdminHomepageComponent,
    ProdottoCardComponent,
    ProdottoViewComponent,
    ProdottoInsertComponent,
    ProdottoCreatoComponent,
    ProdottoEliminatoComponent,
    ProdottoUpdateComponent,
    ProdottoModificatoComponent,
    ImageViewComponent,
    StatisticheComponent,
    LoginComponent,
    AutorizzazioneComponent,
    UserHomepageComponent,
    UserNavbarComponent,
    ProdottiUserComponent,
    ProdottoViewUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule, 
    MatButtonModule,
    MatInputModule, 
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,

    RouterModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatCardModule,
    MatSliderModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
