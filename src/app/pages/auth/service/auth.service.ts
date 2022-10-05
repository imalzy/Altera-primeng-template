import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRegister } from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = environment.endpoint.altaApi;
  constructor(private httpClient: HttpClient) {}

  // Registration service

  register(body: IRegister): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/auth/register`, body);
  }

  login(body: IRegister): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/auth/login`, body);
  }

  getUserInfo(): Observable<any> {
    // const jwt = localStorage.getItem('jwt_token');
    // console.log(jwt)
    // const headerOption = {
    //   headers: new HttpHeaders({
    //     'Authorization': `Bearer ${jwt}` ,
    //   }),
    // };
    return this.httpClient.get(`${this.apiUrl}/auth/info`);
  }
}
