import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RequestsServiceService } from 'src/app/global-shared/global-services/requests-service.service';

@Injectable({
  providedIn: 'root'
})
export class MajorExpensesService {

  id = null;
  idKNOWCustomer = null;

  constructor(private http: HttpClient, private requestService: RequestsServiceService) { }

  postRequest(body) {

    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.requestService.token,
      })
    };

    console.log('body:', body);
    return this.http.post(`${environment.apiUrl}/api/Solicitudes/salud`, body, httpOptions);
  }

  returnData(id): Observable<any> {
    console.log(environment.apiUrl);
    return this.http.get(`${environment.apiUrl}/api/Solicitudes/salud/${id}`);
  }


  sendRequest(id): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/Solicitudes/salud/confirm/${id}`, id);
  }
  returnCotizacionData(id): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/Solicitudes/salud/cotizacion/${id}`);
  }
  getID(id) {
    this.id = id;
    // return this.returnData(id);
  }
}
