import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  baseUrl: any = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getReviewStatus() {
    return this.http.get(`${this.baseUrl}/api/Resource/ReviewStatus`);
  }

  getRamo() {
    return this.http.get(`${this.baseUrl}/api/Resource/Ramos`);
  }
}
