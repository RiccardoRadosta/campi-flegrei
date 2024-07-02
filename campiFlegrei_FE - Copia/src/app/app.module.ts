import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EarthquakeListComponent } from './component/earthquake-list/earthquake-list.component';
import { EarthquakeService } from './service/earthquake.service';
import { RecentEarthquakesComponent } from './component/recent-earthquakes/recent-earthquakes.component';
import { WeeklyEarthquakeCountsComponent } from './component/weekly-earthquake-counts/weekly-earthquake-counts.component';
import { EarthquakeCountsComponent } from './component/earthquake-counts/earthquake-counts.component';
import { EarthquakeMapComponent } from './component/earthquake-map/earthquake-map.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader { return new TranslateHttpLoader(http); }




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
    EarthquakeCountsComponent,
    EarthquakeMapComponent,


  ],
  imports: [
     BrowserModule,
     RouterModule.forRoot(routes),
      HttpClientModule,
       TranslateModule.forRoot({
         loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient]


          }
        })
      ],
  providers: [EarthquakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }