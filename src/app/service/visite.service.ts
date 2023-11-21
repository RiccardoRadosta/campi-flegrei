import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {
  baseUrl : string = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  insertVisita(): Observable<any>{
    let url = `${this.baseUrl}visite/aggiungi`;
    return this.http.get<any>(url);
  }

  accessi(): Observable<any>{
    let url = `${this.baseUrl}visite/accessi`;
    return this.http.get<any>(url);
  }
}
