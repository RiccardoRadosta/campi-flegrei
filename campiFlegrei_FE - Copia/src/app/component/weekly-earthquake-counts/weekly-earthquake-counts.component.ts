import Chart from 'chart.js/auto';
import { Component, OnInit } from '@angular/core';
import { EarthquakeService } from 'src/app/service/earthquake.service';
import { LinearScale } from 'chart.js';

@Component({
  selector: 'app-weekly-earthquake-counts',
  templateUrl: './weekly-earthquake-counts.component.html',
  styleUrls: ['./weekly-earthquake-counts.component.scss']
})
export class WeeklyEarthquakeCountsComponent implements OnInit {
  earthquakeCountsLastWeek: { [date: string]: number } = {};
  chart: Chart | undefined;

  constructor(private earthquakeService: EarthquakeService) { }

  ngOnInit(): void {
    this.loadEarthquakeCountsLastWeek();
  }

  loadEarthquakeCountsLastWeek(): void {
    this.earthquakeService.getEarthquakeCountsLastWeek().subscribe((data: { [date: string]: number }) => {
      this.earthquakeCountsLastWeek = data;
      this.createChart();
    });
  }

  createChart(): void {
    const labels = Object.keys(this.earthquakeCountsLastWeek);
    const values = Object.values(this.earthquakeCountsLastWeek);

    if (this.chart) {
      this.chart.destroy(); // Elimina il grafico esistente prima di crearne uno nuovo
    }

    // Registra la scala lineare esplicitamente
    Chart.register(LinearScale);

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'N° Terremoti',
          data: values,
          //backgroundColor: 'white',//rgba(75, 192, 192, 0.2)
          //borderColor: 'rgba(75, 192, 192, 1)',
          //borderWidth: 3
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
