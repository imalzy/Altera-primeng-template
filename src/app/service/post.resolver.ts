import { PostService } from './../pages/course/service/post.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<boolean> {

  constructor(private postService:PostService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log(route.params?.id);
    const paramId = route.params?.id;
    return this.postService.getById(paramId);
  }
}
