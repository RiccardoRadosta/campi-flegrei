import { Component, OnInit } from '@angular/core';
import { EarthquakeService } from 'src/app/service/earthquake.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-earthquake-counts',
  templateUrl: './earthquake-counts.component.html',
  styleUrls: ['./earthquake-counts.component.scss']
})
export class EarthquakeCountsComponent implements OnInit {
  todayEarthquakeCount: number = 0;
  last7DaysEarthquakeCount: number = 0;
  last30DaysEarthquakeCount: number = 0;

  constructor(
    private earthquakeService: EarthquakeService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.loadTodayEarthquakeCount();
    this.loadLast7DaysEarthquakeCount();
    this.loadLast30DaysEarthquakeCount();
  }

  loadTodayEarthquakeCount(): void {
    this.earthquakeService.countTodayEarthquakes().subscribe((count: number) => {
      this.todayEarthquakeCount = count;
    });
  }

  loadLast7DaysEarthquakeCount(): void {
    this.earthquakeService.countLast7DaysEarthquakes().subscribe((count: number) => {
      this.last7DaysEarthquakeCount = count;
    });
  }

  loadLast30DaysEarthquakeCount(): void {
    this.earthquakeService.countLast30DaysEarthquakes().subscribe((count: number) => {
      this.last30DaysEarthquakeCount = count;
    });
  }
}



