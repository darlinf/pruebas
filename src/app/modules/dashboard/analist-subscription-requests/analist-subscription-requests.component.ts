import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
// import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { RequestsServiceService } from 'src/app/global-shared/global-services/requests-service.service';
import { HttpParams } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
// import { UserService } from '../../../core/services/user/user.service';  
import { AppComponent } from 'src/app/app.component';
import { SelectionModel } from '@angular/cdk/collections'; 
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BaseDialogComponent } from '../../../global-shared/components/base-dialog/base-dialog.component';
import { DialogOptionService } from '../../../global-shared/global-services/dialog-option.service'

@Component({
  selector: 'app-analist-subscription-requests',
  templateUrl: './analist-subscription-requests.component.html',
  styleUrls: ['./analist-subscription-requests.component.scss']
})
export class AnalistSubscriptionRequestsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'noCotizacion', 'fecha', 'timeElapsed', 'intermediary', 'seguro', 'country', 'nombres', 'reviewStatus', 'assigned', 'action'];
  dataSource;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  selection;

  adminColumnsHidden = true;

  constructor(
    private router: Router,
    private requestService: RequestsServiceService,
    // private userService: UserService,
    private appComponent: AppComponent,
    private dialog: MatDialog,
    private dialogOptions: DialogOptionService,
  ) { }

  optionsTestDropdown= [];

  requests;

  ngOnInit(): void {

    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel(allowMultiSelect, initialSelection);

    // console.log(this.requestService.decodedToken);
    // console.log(this.requestService.decodedToken.RoleName);
    // console.log(this.requestService.decodedToken.Country);

    if (this.requestService.decodedToken.RoleName == 'Administrador') {
      this.adminColumnsHidden = false;
    }

    this.getRequests();
    this.getAnalists();

    //CALCULAR la diferencia de dias, por si acaso tengo que hacerlo yo, en vez del backEnd .

    // for(let x = 0; x < arrayPrueba.length; x++){
    //   let Difference_In_Time = new Date('10/10/2022').getTime() - arrayPrueba[x].created.getTime();
    //   let Difference_In_Days = Math.round((Difference_In_Time / (1000 * 3600 * 24)));
    //   console.log(Difference_In_Days);
    //   arrayPrueba[x].time = `${Difference_In_Days} day(s)`
    // }

    // this.dataSource.data = arrayPrueba;
  }

  getRequests(params: HttpParams = new HttpParams()) {
    let data;
    console.log(params);

    // if (this.userService.getRoles().includes('WWS') && this.userService.getRoles().includes('WMA')) {
    //   params = params.append('country', localStorage.getItem('countryCode'));
    // }

    setTimeout(() => {
      this.appComponent.showOverlay = true;
    });
    
    params = params.append('country', this.requestService.decodedToken.Country);
    console.log('Recuerda los estados que te mando Manuel.');
    console.log(`Manuel Montero: Status, las siguientes opciones: Aprobado, 
    Pendiente de Informacion Medica, Pendiente de Informacion General, Declinado.`);

        console.log('hola 2');
        this.requestService.getRequests(params)
      .subscribe(res => {
        console.log('hola')
        data = res;
        console.log(data);
        this.requests = data.data;
        this.dataSource = new MatTableDataSource(this.requests);
        // this.dataSource.data = this.requests;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
          if (length == 0 || pageSize == 0) { return `0 of ${length}`; }
      
          length = Math.max(length, 0);
      
          const startIndex = page * pageSize;
          const endIndex = startIndex < length ?
              Math.min(startIndex + pageSize, length) :
              startIndex + pageSize;
      
          return `Mostrando ${startIndex + 1} - ${endIndex} de ${length}`;
        };
        this.paginator._intl.itemsPerPageLabel= '';
        // this.dataSource.data = this.requests;
        this.appComponent.showOverlay = false;
    }, err => console.log(err));
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    // const numRows = this.dataSource.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        // this.dataSource.forEach(row => this.selection.select(row));
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  dialogCall(){

    let Dialog = this.dialog.open(BaseDialogComponent, {
      data: this.dialogOptions.selectDropDown('Analista', this.optionsTestDropdown),
      minWidth: 385,
    });

    Dialog.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  escalateRequest(requestId, ramo){

    console.log(requestId);
    console.log(ramo);

    let Dialog = this.dialog.open(BaseDialogComponent, {
      data: this.dialogOptions.selectDropDown('Analista', this.optionsTestDropdown),
      minWidth: 385,
    });

    let resulSelectedtModal;

    let bodyPost;

    Dialog.afterClosed().subscribe((result) => {
      console.log(result);

      if (result != null){

        setTimeout(() => {
          this.appComponent.showOverlay = true;
        });

        resulSelectedtModal = this.optionsTestDropdown.find(value => value.value == result);

        console.log(resulSelectedtModal);

        bodyPost = {
          userId: resulSelectedtModal.value,
          requestId: requestId,
          ramo: ramo,
        }

        console.log(bodyPost);

        this.requestService.escalateAnotherAnalist(bodyPost).subscribe((result : any) => {
          setTimeout(() => {
            this.appComponent.showOverlay = false;
          });

          console.log(result);

          this.getRequests();

          Dialog = this.dialog.open(BaseDialogComponent, {
            data: this.dialogOptions.confirmedEscalateAnalist(resulSelectedtModal.viewValue),
            minWidth: 385,
          });
        },
        error => {
          setTimeout(() => {
            this.appComponent.showOverlay = false;
          });

          console.log(error);

          Dialog = this.dialog.open(BaseDialogComponent, {
            data: this.dialogOptions.errorServer,
            minWidth: 385,
          });
        })
      }
    });
  }

  getAnalists() {
    this.requestService.getAnalists().subscribe((data: any) => {
      console.log(data);

      for(let x = 0; x < data.data.length; x++) {
        // console.log(data.data[x].name);

        this.optionsTestDropdown.push({value: data.data[x].id, viewValue: data.data[x].name});
      }
    });
  }
}
