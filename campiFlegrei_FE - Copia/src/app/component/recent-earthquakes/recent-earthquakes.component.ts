import { Component, OnInit } from '@angular/core';
import { EarthquakeService } from 'src/app/service/earthquake.service';
import { Earthquake } from '../../model/earthquake.model';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-recent-earthquakes',
  templateUrl: './recent-earthquakes.component.html',
  styleUrls: ['./recent-earthquakes.component.scss']
})
export class RecentEarthquakesComponent implements OnInit {
  earthquakes: Earthquake[] = [];
  earthquakeCount: number = 0;


  constructor(
    private earthquakeService: EarthquakeService,
    private translate: TranslateService
  ) { }


  ngOnInit(): void {
    this.loadRecentEarthquakes();
    this.loadRecentEarthquakeCount();
  }


  loadRecentEarthquakes(): void {
    this.earthquakeService.getRecentEarthquakes().subscribe((data: Earthquake[]) => {
      this.earthquakes = data;
    });
  }


  loadRecentEarthquakeCount(): void {
    this.earthquakeService.countRecentEarthquakes().subscribe((count: number) => {
      this.earthquakeCount = count;
    });
  }


  loadEarthquakeData(): void {
    this.earthquakeService.getRecentEarthquakes().subscribe((data: any) => {
      this.earthquakes = data.map((earthquake: any) => ({
        id: earthquake.id,
        magnitude: earthquake.magnitude,
        latitude: earthquake.location.latitude,
        longitude: earthquake.location.longitude,
        date: earthquake.date
      }));
    });
  }
}





