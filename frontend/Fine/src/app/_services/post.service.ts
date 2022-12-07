import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Post } from './../_interface/posts';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

const AUTH_TOKEN = window.sessionStorage.getItem('auth-token')
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  Post: Post[] = []


  postUrl = environment.apiURL + '/api/post/'

  httpOptions = {
    headers: new HttpHeaders({
      "x-access-token": `${AUTH_TOKEN}`

    })
  };



  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getPosts(){
    this.http.get<any>('http://156.38.173.36:8050/api/post/').subscribe(
      response => {
        this.Post = response;
      }
    );
  }




  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postUrl, post, this.httpOptions).pipe(
      tap((newPost: Post) => window.alert(`added post successfully`)),
      catchError(this.handleError<Post>('addPost'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`Post Service: ${message}`);
  }
}
