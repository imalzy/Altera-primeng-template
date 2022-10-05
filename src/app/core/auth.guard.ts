import { SessionService } from './../pages/auth/service/session.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private sessionService:SessionService) {}

  canActivate() {
    return this.canLoad();
  }

  canLoad(): boolean {
    const result = this.isLogin();
    if(result == false){
      this.router.navigateByUrl("/auth/login")
    }
    return result;
  }

  isLogin(): boolean {
    if (this.sessionService.isUserLogin()) {
      return true;
    } else {
      return false;
    }
  }
}
