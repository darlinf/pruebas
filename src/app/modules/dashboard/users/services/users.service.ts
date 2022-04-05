import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: any = environment.apiUrl;

  token = this.oidcSecurityService.getAccessToken();

  constructor(
    private http: HttpClient,
    private oidcSecurityService: OidcSecurityService
  ) {}

  getUsers(params?: HttpParams) {
    console.log(this.token);

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
      params: params,
    };
    return this.http.get(
      `${this.baseUrl}/api/UserAssignment/UserRule`,
      httpOptions
    );
  }
}
