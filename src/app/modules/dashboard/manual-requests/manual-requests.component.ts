import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { FormHandlerService } from 'src/app/global-shared/global-services/form-handler.service';
import { RequestsServiceService } from 'src/app/global-shared/global-services/requests-service.service';
import { environment } from 'src/environments/environment';
import { AppComponent } from 'src/app/app.component';

export interface Requests {
  no: number;
  nombre: string;
  dependientes: number;
  seguro: string;
  plan: string;
  fecha: Date;
  monto: number;
  estatus: string;

}

@Component({
  selector: 'app-manual-requests',
  templateUrl: './manual-requests.component.html',
  styleUrls: ['./manual-requests.component.scss']
})
export class ManualRequestsComponent implements OnInit {

  newRequestButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: 'Nueva Solicitud',
    buttonColor: 'accent',
    barColor: 'primary',
    raised: true,
    stroked: false,
    mode: 'indeterminate',
    value: 0,
    disabled: false,
    fullWidth: true,
    customClass: 'dashboard-button'
  };

    // tslint:disable-next-line: max-line-length
    displayedColumns: string[] = ['noCotizacion', 'nombres', 'apellidos', 'seguro', 'plan', 'fecha', 'monto', 'createdBy', 'estatus', 'acciones'];

    dataSource;
    requests: any;
    role: any;
  
    loading = false;
  
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(
      private router: Router,
      // private requestsService: RequestsService,
      // public life: LifeService,
      // public disability: DisabilityService,
      private formHandlerService: FormHandlerService,
      private appComponent: AppComponent,
      // private userService: UserService,
      private requestService: RequestsServiceService,
    ) { }

  ngOnInit(): void {
    // this.role = this.userService.getRoleCotizador();
    this.getRequests();
  }

  getRequests(params: HttpParams = new HttpParams()) {
    let data;

    // if (this.userService.getRoles().includes('WWS') && this.userService.getRoles().includes('WMA')) {
    //   params = params.append('country', localStorage.getItem('countryCode'));
    // }

    params = params.append('country', this.requestService.decodedToken.Country);

    // this.loading = true;

    setTimeout(() => {
      this.appComponent.showOverlay = true;
    });
    this.requestService.getRequests(params)
      .subscribe(res => {
        this.appComponent.showOverlay = false;
        console.log(params);
        data = res;
        this.requests = data.data;
        this.dataSource = new MatTableDataSource(this.requests);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        // this.loading = false;

        this.paginator._intl.itemsPerPageLabel= 'Registros por Página';
      }, err => console.log(err));
  }

  newRequest() {
    this.newRequestButtonOptions.active = true;
    this.router.navigateByUrl('/dashboard/manual-requests/new-requests');
  }

  BASE_URL: any = `${environment.apiUrl}`;
  seeRequest(id: number, type: string) {
    if (this.requestService.decodedToken.Country === 'RD') {
      window.open(`${this.BASE_URL}/solicitudesView/${type}/${id}/?location=true`, '_blank');
    } else {
      window.open(`${this.BASE_URL}/solicitudesView/${type}/${id}/?location=false`, '_blank');
    }
  }

  deleteTargeting(id: number, type: string) {
    switch (type) {
      case 'Vida':
        console.log('Vida');
        this.formHandlerService.deleteRequest(id, 'Solicitudes/vida', 'Vida', /** this.appComponent*/ )
          .subscribe(res => {
            console.log(res);
            if (res === true) { this.getRequests(); }
          });
        break;

      case 'Salud':
        console.log('Salud');
        this.formHandlerService.deleteRequest(id, 'Solicitudes/salud', 'Salud', /** this.appComponent*/)
          .subscribe(res => {
            console.log(res);
            if (res === true) { this.getRequests(); }
          });
        break;

      case 'Disability':
        console.log('Disability');
        this.formHandlerService.deleteRequest(id, 'Solicitudes/disability', 'Disability', /** this.appComponent*/)
          .subscribe(res => {
            if (res === true) { this.getRequests(); }
          });
        break;

      default:
        break;
    }
  }

  directSendTargeting(id: number, type: string) {
    switch (type) {
      case 'Vida':
        this.formHandlerService.directSendRequest(id, 'Solicitudes/vida', 'Vida', /** this.appComponent*/)
          .subscribe(res => {
            console.log(res);
            if (res === true) { this.getRequests(); }
          });
        break;

      case 'Salud':
        this.formHandlerService.directSendRequest(id, 'Solicitudes/salud', 'Salud', /** this.appComponent*/)
          .subscribe(res => {
            console.log(res);
            if (res === true) { this.getRequests(); }
          });
        break;

      case 'Disability':
        this.formHandlerService.directSendRequest(id, 'Solicitudes/disability', 'Disability', /** this.appComponent*/)
          .subscribe(res => {
            console.log(res);
            if (res === true) { this.getRequests(); }
          });
        break;

      default:
        break;
    }
  }

  navigateToRequest(id, type) {
    this.newRequestButtonOptions.active = true;

    if(type == 'vida'){
      this.router.navigateByUrl(`/dashboard/manual-requests/new-requests/vida/${id}`);
    }
    else if (type == 'salud') {
      this.router.navigateByUrl(`/dashboard/manual-requests/new-requests/salud/${id}`);
    }
    else if (type == 'disability') {
      this.router.navigateByUrl(`/dashboard/manual-requests/new-requests/disability/${id}`);
    }
  }
}
