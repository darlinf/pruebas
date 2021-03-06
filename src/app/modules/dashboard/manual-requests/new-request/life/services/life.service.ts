import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestsServiceService } from 'src/app/global-shared/global-services/requests-service.service';

@Injectable({
  providedIn: 'root'
})
export class LifeService {

  id = null;
  idKNOWCustomer = null;

  constructor(private http: HttpClient, private route: Router, private requestService: RequestsServiceService) { }

  postRequest(body) {

    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.requestService.token,
      })
    };

    return this.http.post(`${environment.apiUrl}/api/Solicitudes/vida`, body, httpOptions);
  }

  returnData(id): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/Solicitudes/vida/${id}`);
  }
  returnCotizacionData(id): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/Solicitudes/vida/cotizacion/${id}`);
  }
  sendRequest(id): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/Solicitudes/vida/confirm/${id}`, id);
  }

  getID(id) {
    this.id = id;
    this.idKNOWCustomer = id;
    console.log("hola, soy ", id);
    this.route.navigateByUrl(`/dashboard/requests/new-requests/life/${id}`);
  }

  // dataCapturedProperty=null;
  // captureData(dataCaptured){
  //     this.dataCapturedProperty=dataCaptured;
  // }
}
