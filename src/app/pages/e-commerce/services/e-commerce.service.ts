import { SessionService } from './../../auth/service/session.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRegister } from '../../auth/models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class ECommerceService {
  apiUrl: string = environment.endpoint.altaApi;
  headerOption:any;

  constructor(
    private httpClient: HttpClient,
    private sessionService: SessionService
  ) {
    this.headerOption = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.sessionService.getToken()}`,
      }),
    }
  }
  // sebelum menggunakan API intercetor
  // getProduct(): Observable<any> {
  //   console.log(this.sessionService.getToken())
  //   return this.httpClient.get(`${this.apiUrl}/products`, headerOption);
  // }

  // Registration service
  // sesudah menggunakan API intercetor
  getProduct(): Observable<any> {
    console.log(this.sessionService.getToken())
    return this.httpClient.get(`${this.apiUrl}/products`);
  }

  postProduct(body: any): Observable<any> {
    console.log(this.sessionService.getToken())
    return this.httpClient.post(`${this.apiUrl}/products`, body);
  }

  putProduct(body: IRegister): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/products`, body);
  }

  deleteProduct(productId: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/products?id=${productId}`);
  }
}
