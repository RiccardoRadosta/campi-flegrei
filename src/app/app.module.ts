import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule

import { AppComponent } from './app.component';
import { EarthquakeListComponent } from './component/earthquake-list/earthquake-list.component';
import { EarthquakeService } from './service/earthquake.service';
import { RecentEarthquakesComponent } from './component/recent-earthquakes/recent-earthquakes.component';
import { WeeklyEarthquakeCountsComponent } from './component/weekly-earthquake-counts/weekly-earthquake-counts.component';

// Definisci le rotte
const routes: Routes = [
  { path: '', component: EarthquakeListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EarthquakeListComponent,
    RecentEarthquakesComponent,
    WeeklyEarthquakeCountsComponent,
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
