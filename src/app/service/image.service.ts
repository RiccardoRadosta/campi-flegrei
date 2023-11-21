import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseUrl : string = "http://localhost:8080/"

  constructor(private http: HttpClient) { }


  insertImg(immagine : any, id:any): Observable<{ imageUrl: string }>{
    const formData: FormData = new FormData();
    formData.append('image', immagine);
    formData.append('id', id);
    let url = `${this.baseUrl}image/insertImage`;
    return this.http.post<{ imageUrl: string }>(url,formData);
   }

   updateImage(immagine : any, id:any): Observable<{ imageUrl: string }>{
    const formData: FormData = new FormData();
    formData.append('image', immagine);
    formData.append('id', id);
    let url = `${this.baseUrl}image/updateImage`;
    return this.http.post<{ imageUrl: string }>(url,formData);
   }
  
  deleteImage(id : number): Observable<any>{
    let url = `${this.baseUrl}image/deleteByProdottoId?id=${id}`;
    return this.http.delete<any>(url);
  }
  getListaImage(id : number): Observable<any>{
    let url = this.baseUrl + `image/getallByProdottoId?id=${id}`
    return this.http.get<any>(url);
  }

  getFirstListaImage(): Observable<any>{
    let url = this.baseUrl + `image/getallFirstImage`
    return this.http.get<any>(url);
  }
  // updateImage(paylod : any, id : number):Observable<any>{
  //   let url = this.baseUrl + `image/updateImage?id=${id}`
  //   return this.http.get<any>(url, paylod);
  // }
  deleteImageById(id : number): Observable<any>{
    let url = `${this.baseUrl}image/deleteById?id=${id}`;
    return this.http.delete<any>(url);
  }


}
