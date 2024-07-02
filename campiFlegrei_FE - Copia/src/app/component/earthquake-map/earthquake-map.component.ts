import { Component, Input } from '@angular/core';
import { Earthquake } from 'src/app/model/earthquake.model';

// Funzione per convertire da gradi, minuti e secondi a gradi decimali
function dmsToDecimal(degrees: number, minutes: number, seconds: number): number {
  return degrees + (minutes / 60) + (seconds / 3600);
}

// Coordinate in gradi decimali
const topLeftLat = dmsToDecimal(40, 55, 28);
const topLeftLng = dmsToDecimal(13, 54, 55);
const bottomLeftLat = dmsToDecimal(40, 45, 19);
const bottomLeftLng = dmsToDecimal(13, 54, 55);
const topRightLat = dmsToDecimal(40, 55, 36);
const topRightLng = dmsToDecimal(14, 29, 18);
const bottomRightLat = dmsToDecimal(40, 45, 27);
const bottomRightLng = dmsToDecimal(14, 28, 18);

@Component({
  selector: 'app-earthquake-map',
  templateUrl: './earthquake-map.component.html',
  styleUrls: ['./earthquake-map.component.scss']
})

export class EarthquakeMapComponent {
  @Input() earthquakes: Earthquake[] = [];

  // Funzione per calcolare la posizione left in percentuale
  calculateLeftPercentage(longitude: number): number | null {
    if (longitude < bottomLeftLng || longitude > topRightLng) {
      return null; // Longitude fuori scala
    }

    const leftPosition = ((longitude - topLeftLng) / (topRightLng - topLeftLng)) * 100;
    return leftPosition;
  }

  // Funzione per calcolare la posizione top in percentuale
  calculateTopPercentage(latitude: number): number | null {
    if (latitude < bottomLeftLat || latitude > topLeftLat) {
      return null; // Latitude fuori scala
    }

    const topPosition = ((topLeftLat - latitude) / (topLeftLat - bottomLeftLat)) * 100;
    return topPosition;
  }
}



