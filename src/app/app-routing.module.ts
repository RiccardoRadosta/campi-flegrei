import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './modules/admin/admin-homepage/admin-homepage.component'; 
import { AdminNavbarComponent } from './modules/admin/admin-navbar/admin-navbar.component';
import { ProdottoCardComponent } from './modules/prodotto/prodotto-card/prodotto-card.component';
import { ProdottoViewComponent } from './modules/prodotto/prodotto-view/prodotto-view.component';
import { ProdottoInsertComponent } from './modules/prodotto/prodotto-insert/prodotto-insert.component';
import { ProdottoCreatoComponent } from './shared/prodotto-creato/prodotto-creato.component';
import { ProdottoUpdateComponent } from './modules/prodotto/prodotto-update/prodotto-update.component';
import { StatisticheComponent } from './modules/admin/statistiche/statistiche.component';
import { LoginComponent } from './modules/admin/login/login.component';
import { AutorizzazioneComponent } from './shared/autorizzazione/autorizzazione.component';
import { UserHomepageComponent } from './modules/user/user-homepage/user-homepage.component';
import { UserNavbarComponent } from './modules/user/user-navbar/user-navbar.component';
import { ProdottoViewUserComponent } from './modules/user/prodotto-view-user/prodotto-view-user.component';


const routes: Routes = [
  {path: 'admin-homepage', component: AdminHomepageComponent},
  {path: 'admin-navbar', component: AdminNavbarComponent},
  {path: 'prodotto', component: ProdottoCardComponent},
  {path: 'prodotto-insert', component: ProdottoInsertComponent},
  {path: 'prodotto-creato', component: ProdottoCreatoComponent},
  {path: 'prodotto-update/:id', component: ProdottoUpdateComponent},
  {path: 'prodotto-view/:id', component: ProdottoViewComponent},
  {path: 'statistiche', component: StatisticheComponent},
  {path: 'login', component: LoginComponent},
  {path: 'autorizzazione', component: AutorizzazioneComponent},
  {path: 'user-homepage', component: UserHomepageComponent},
  {path: 'user-navbar', component: UserNavbarComponent},
  {path: 'prodotto-view-user/:id', component: ProdottoViewUserComponent},
  
  {path: '', redirectTo: 'user-homepage', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
