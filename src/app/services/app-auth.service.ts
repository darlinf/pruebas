import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import {  catchError, map, tap } from 'rxjs/operators';
// import { Solicitud } from 'src/app/entities/solicitud';

import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})

export class AppAuthService {

  private subscriptionRequestUrl = 'https://wwsdevapiapp.azurewebsites.net/api/Solicitudes?from=2020-01-01&to=2021-12-31&country=rd';

  constructor(
    private http: HttpClient,
    public oidcSecurityService: OidcSecurityService) {
      this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
        /*...*/
      }); 

  }

  getAnalistSubscriptionRequest(): Observable<any> {

    this.oidcSecurityService.revokeAccessToken().subscribe((result) => console.log(result));

    const token = this.oidcSecurityService.getAccessToken();
    
    console.log(token);

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.http.get<any>(this.subscriptionRequestUrl, httpOptions).pipe(
      catchError(this.handleError<any>('getSolicitudes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getToken(){
    const token = this.oidcSecurityService.getAccessToken();

    console.log(token);

    this.getAnalistSubscriptionRequest();

    return token;
  }
}
