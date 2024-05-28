import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule

import { AppComponent } from './app.component';
import { EarthquakeListComponent } from './component/earthquake-list/earthquake-list.component';
import { EarthquakeService } from './service/earthquake.service';
// Definisci le rotte
const routes: Routes = [
  { path: '', component: EarthquakeListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EarthquakeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // Aggiungi RouterModule
  ],
  providers: [EarthquakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
