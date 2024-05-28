import { Component, OnInit } from '@angular/core';
import { EarthquakeService } from 'src/app/service/earthquake.service';

@Component({
  selector: 'app-weekly-earthquake-counts',
  templateUrl: './weekly-earthquake-counts.component.html',
  styleUrls: ['./weekly-earthquake-counts.component.scss']
})
export class WeeklyEarthquakeCountsComponent implements OnInit {
  earthquakeCountsLastWeek: { [date: string]: number } = {};

  constructor(private earthquakeService: EarthquakeService) { }

  ngOnInit(): void {
    this.loadEarthquakeCountsLastWeek();
  }

  loadEarthquakeCountsLastWeek(): void {
    this.earthquakeService.getEarthquakeCountsLastWeek().subscribe((data: { [date: string]: number }) => {
      this.earthquakeCountsLastWeek = data;
    });
  }
}
