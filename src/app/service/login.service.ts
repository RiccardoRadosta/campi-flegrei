import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl : string = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  login(paylod: any): Observable<any>{
    let url = `${this.baseUrl}visite/authenticate`;
    return this.http.post<any>(url,paylod);
  }
}
