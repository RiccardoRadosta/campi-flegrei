import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  baseUrl : string = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  getListaProdotto(): Observable<any>{
    let url = this.baseUrl + "prodotto/getall"
    return this.http.get<any>(url);
  }

  getProdottoSingolo(id : number): Observable<any>{
    let url = `${this.baseUrl}prodotto/read?id=${id}`;
    return this.http.get<any>(url);
  }

  insertProdotto(prodotto: any): Observable<any>{
    let url = `${this.baseUrl}prodotto/insert`;
    return this.http.post<any>(url,prodotto);
  }

  deleteProdotto(id : number): Observable<any>{
    let url = `${this.baseUrl}prodotto/delete?id=${id}`;
    return this.http.delete<any>(url);
  }


}
