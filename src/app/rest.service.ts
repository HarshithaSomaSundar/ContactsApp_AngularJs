import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3001/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getContacts(): Observable<any> {
    return this.http.get(endpoint + 'contacts').pipe(
      map(this.extractData));
  }
  
  getContact(id): Observable<any> {
    return this.http.get(endpoint + 'contacts/' + id).pipe(
      map(this.extractData));
  }

  addContact(contact): Observable<any> {
    console.log(contact);
    return this.http.post<any>(endpoint + 'contacts/', JSON.stringify(contact), httpOptions).pipe(
      tap((product) => console.log(`added contact w/ id=${contact.id}`)),
      //catchError(this.handleError<any>('addProduct'))
    );
  }
  

  
}
