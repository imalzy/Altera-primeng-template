import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  createSession(info:any){
    localStorage.setItem('user_info', JSON.stringify(info));
  }

  getSession(){
    return JSON.parse(localStorage.getItem('user_info'));
  }


  getToken(){
    return localStorage.getItem('jwt_token');
  }

  isUserLogin():boolean{
    const jwt = localStorage.getItem('jwt_token');

    return jwt ? true : false;
  }

  getEmail():Observable<string>{
    const email = this.getSession()?.data
    return of(email)
  }

  destroySession(){
    localStorage.clear()
  }
}
