import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // const auth = localStorage.getItem('auth');
      // if(auth){
      //   return true;
      // }
      // this.router.navigateByUrl('/login')
    return false;
  }

  canLoad(route: Route): boolean {
    // const auth = localStorage.getItem('auth');
    //   if(auth){
    //     return true;
    //   }
    //   this.router.navigateByUrl('/login')
    return true;
  }
}
