import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import {catchError, tap} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8000"

  httpHeaders = new HttpHeaders({"content-type":"application/json"})

  getUsers():Observable<any[]>{
    return this.http.get<any[]>(this.url + '/register/',{headers:this.httpHeaders}).pipe(catchError(this.handleError))
  }
  
  createUser(user):Observable<any>{
    return this.http.post<any>(this.url + '/register/', user,{headers:this.httpHeaders});
  }


  private handleError(err:HttpErrorResponse){
    let errorMessage = ''

    if(err.error instanceof ErrorEvent){
      // a client-side or network error has occured
      errorMessage = `An error message has occured ${err.error.message}`
    }else{
      errorMessage = `Server returned ${err.status} and error ${err.message}`
    }
    console.log(errorMessage)
    return throwError(errorMessage)
  }
  

}
