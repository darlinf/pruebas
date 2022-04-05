import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  baseUrl: any = environment.apiUrl;
  token = this.oidcSecurityService.getAccessToken();

  constructor(
    private http: HttpClient,
    private oidcSecurityService: OidcSecurityService
  ) {}

  getReviewStatus() {
    return this.http.get(`${this.baseUrl}/api/Resource/ReviewStatus`);
  }

  getRamo() {
    return this.http.get(`${this.baseUrl}/api/Resource/Ramos`);
  }

  getMercados() {
    return this.http.get(`${this.baseUrl}/api/Resource/Mercados`);
  }

  getRoles() {
    return this.http.get(`${this.baseUrl}/api/Resource/Roles`);
  }

  postAssignRole(params) {
    const headers = {
      Authorization: 'Bearer ' + this.token,
    };
    return this.http.post<any>(
      `${this.baseUrl}/api/UserAssignment/RoleRule`,
      params,
      { headers }
    );
  }

  postAssignUser(params) {
    const headers = {
      Authorization: 'Bearer ' + this.token,
    };
    return this.http.post<any>(
      `${this.baseUrl}/api/UserAssignment/UserRule`,
      params,
      { headers }
    );
  }

  deleteUserRule(id) {
    const headers = {
      Authorization: 'Bearer ' + this.token,
    };
    return this.http.delete<any>(
      `${this.baseUrl}/api/UserAssignment/UserRule/${id}`,
      { headers }
    );
  }

  deleteRoleRule(id) {
    const headers = {
      Authorization: 'Bearer ' + this.token,
    };
    return this.http.delete<any>(
      `${this.baseUrl}/api/UserAssignment/RoleRule/${id}`,
      { headers }
    );
  }

  getUserAssignmentAnalysts() {
    return this.http.get(`${this.baseUrl}/api/UserAssignment/Analysts`);
  }
}
