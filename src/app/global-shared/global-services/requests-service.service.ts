import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AppAuthService } from '../../services/app-auth.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class RequestsServiceService {

  BASE_URL: any = `${environment.apiUrl}/api`;

  token = this.oidcSecurityService.getAccessToken();

  decodedToken = { 
    name: '',
    RoleName : '',
    Country : '',
    FirstName : '',
    email:''
  };

  constructor(private http: HttpClient, private authService: AppAuthService, public oidcSecurityService: OidcSecurityService) {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
      /*...*/

      if(!accessToken){
        this.token = this.oidcSecurityService.getAccessToken();
      }
      else
      {
        this.token = accessToken;
      }
      // this.decodedToken = JSON.parse(window.atob(this.token.split('.')[1]));
      this.decodedToken = jwt_decode(this.token);
      console.log(this.decodedToken);

      console.log('**ServiceConstructor**');
    });
   }

  getRequests(params?: HttpParams) {

    // const token = this.oidcSecurityService.getAccessToken();
    this.token = this.oidcSecurityService.getAccessToken();
    // this.decodedToken = JSON.parse(window.atob(this.token.split('.')[1]));
    this.decodedToken = jwt_decode(this.token);

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
      params: params
    };

    return (this.http.get(`${this.BASE_URL}/Solicitudes`, httpOptions));
  }

  getStatuses() {
    return (this.http.get(`${this.BASE_URL}/Resource/ReviewStatus`));
  }

  getRamos() {
    return (this.http.get(`${this.BASE_URL}/Resource/Ramos`));
  }

  getAnalists() {

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      })
    };

    return(this.http.get(`${this.BASE_URL}/UserAssignment/Analysts`, httpOptions));
  }

  escalateAnotherAnalist(body) {

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      })
    };

    return(this.http.post(`${this.BASE_URL}/UserAssignment/Transfer`, body, httpOptions));
  }

  getDecodedToken()
  {
    this.token = this.oidcSecurityService.getAccessToken();
    // return JSON.parse(window.atob(this.token.split('.')[1]));
    return this.decodedToken = jwt_decode(this.token);
  }
}
