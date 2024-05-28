import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Earthquake } from '../model/earthquake.model';

@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {

  private baseUrl = 'http://localhost:8080/earthquakes';  // Assicurati che questo sia l'URL corretto del tuo backend

  constructor(private http: HttpClient) { }

  getRecentEarthquakes(): Observable<Earthquake[]> {
    return this.http.get<Earthquake[]>(`${this.baseUrl}/last24hours`);
  }

  countRecentEarthquakes(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/last24hours/count`);
  }

  getEarthquakeCountsLastWeek(): Observable<{ [date: string]: number }> {
    return this.http.get<{ [date: string]: number }>(`${this.baseUrl}/lastweek/counts`);
  }
}
