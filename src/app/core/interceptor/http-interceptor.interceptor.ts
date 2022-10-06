import { SessionService } from './../../pages/auth/service/session.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor(private sessionService: SessionService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.sessionService.getSession() || this.sessionService.getToken()) {
      let headers = request.headers.set(
        'Authorization',
        `Bearer ${this.sessionService.getToken()}`
      );

      request = request.clone({
        headers: headers,
        body: request.body || {},
      });
    } else {
      request = request.clone({
        headers: request.headers.set('Authorization', ''),
        body: request.body || {},
      });
    }
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
        this.handleError(error);
        return of(error)
      }) as any
    );
  }

  private handleError(err:HttpErrorResponse):Observable<any> {
    console.log(err);
    if(err.status === 400){
      Swal.fire({
        icon: 'error',
        title: err?.status,
        text: err?.error?.error,
      })
    }else if(err.status === 500){
      Swal.fire({
        icon: 'error',
        title: 'Internal Service Error',
        text: err?.error?.error,
      })
    }
    throw Error;
  }
}
