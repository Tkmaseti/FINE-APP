import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { User } from '../_interface/users';


const API_URL = 'http://localhost:8081/api/test/';
const AUTH_TOKEN = window.sessionStorage.getItem('auth-token')

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user_url = 'http://localhost:8050/api/practitioner';
  users: User[] = []
  token: any

  httpOptions = {
    headers: new HttpHeaders({
      "x-access-token": `${AUTH_TOKEN}`

    })
  };

  // headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization': 'Bearer' + this.token
  // })

  constructor(
    private http: HttpClient,
    private message: MessageService

    ) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  // updateUser(id: string, user: User): Observable<any> {
  //   return this.http.put(this.user_url+`/${id}`, user, this.httpOptions )
  //   .pipe(
  //     tap(_ => this.log(`updated product id=${user.username}`)),
  //     catchError(this.handleError<any>('updateProduct'))
  //   );
  // }



  // new update
  updateUser(id: any, data: any): Observable<any> {
    return this.http.put(`${this.user_url}/${id}`, data);
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
    this.message.add(`Product Service: ${message}`);
  }
}
