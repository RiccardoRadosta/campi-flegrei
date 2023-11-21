import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { GiocatoriModelRequest, GiocatoriModelResponse } from '../models/giocatori.model';

@Injectable({
  providedIn: 'root'
})
export class GiocatoriServiceService {

  
  baseUrl : string = "http://localhost:8080/"

  constructor(private http: HttpClient, private router: Router) { }

  getListaGiocatori(): Observable<any>{
      let url = `${this.baseUrl}giocatori/getall`;
      return this.http.get<any>(url);
  }

  getGiocatoreSingolo(id: number): Observable<any>{
    let url = `${this.baseUrl}giocatori/read?id=${id}`;
    return this.http.get<any>(url);
  }

  addPlayer(payload: GiocatoriModelRequest | any): Observable<GiocatoriModelResponse>{
    return this.http.post<GiocatoriModelResponse>(this.baseUrl+'giocatori/insert', payload);
  }
}
