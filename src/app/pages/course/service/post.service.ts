import { catchError, Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPost } from '../model/post.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  urlApi: string = environment.endpoint.mockApi;
  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  // getPost(): any {
  //   return this.httpClient.get(`${this.urlApi}/posts`);
  // }

  // getPost(): Observable<IPost[]> {
  //   return this.httpClient.get<IPost[]>(`${this.urlApi}/post`).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  getPost(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${this.urlApi}/posts`);
  }

  postData(body: IPost): Observable<IPost> {
    const headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient.post<IPost>(
      `${this.urlApi}/posts`,
      body,
      headerOption
    );
  }

  getById(id: string): Observable<IPost> {
    return this.httpClient.get<IPost>(`${this.urlApi}/posts/${id}`);
  }

  handleError(err: HttpErrorResponse) {
    console.log(err);
    let errorMessage: string = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }

    alert(errorMessage);

    // this.toastr.success('Hello world!', 'Toastr fun!');
    return throwError(() => {
      return errorMessage;
    });
  }
}
