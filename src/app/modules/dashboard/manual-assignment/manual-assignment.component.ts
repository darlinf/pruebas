import { SelectionModel } from '@angular/cdk/collections';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BaseDialogComponent } from 'src/app/global-shared/components/base-dialog/base-dialog.component';
import { DialogOptionService } from 'src/app/global-shared/global-services/dialog-option.service';
import { RequestsServiceService } from 'src/app/global-shared/global-services/requests-service.service';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-manual-assignment',
  templateUrl: './manual-assignment.component.html',
  styleUrls: ['./manual-assignment.component.scss'],
})
export class ManualAssignmentComponent implements OnInit {
  dataSource;
  selection;
  ELEMENT_DATA;
  itemsPerPage: number;
  manualAssignment;

  displayedColumns: string[] = [
    'select',
    'noQuote',
    'date',
    'timeElapsed',
    'intermediary',
    'ramo',
    'market',
    'client',
    'status',
    'assignee',
    'actions',
  ];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private dialogOptions: DialogOptionService,
    private requestsService: RequestsServiceService,
    private appComponent: AppComponent
  ) {}

  optionsTestDropdown = [];

  getAnalysts() {
    this.requestsService.getAnalists().subscribe((res) => {
      let data: any = res;
      data.data.forEach((item) => {
        const list: object = {
          value: item.id,
          viewValue: item.name,
        };
        this.optionsTestDropdown.push(list);
      });
    });
  }

  ngOnInit() {
    this.getAnalysts();
    this.getManualAssignment();
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel(allowMultiSelect, initialSelection);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  getManualAssignment(params: HttpParams = new HttpParams()) {
    let data;

    params = params.append(
      'country',
      this.requestsService.decodedToken.Country
    );

    this.requestsService.getRequests(params).subscribe((res) => {
      data = res;
      this.manualAssignment = data.data;
      this.startDataSource(this.manualAssignment);
      this.setPaginatorConfig();
    });
  }

  /**
   * Inicializa la tabla
   * @param data
   */
  startDataSource(data) {
    // this.manualAssignment = data.data;
    this.dataSource = new MatTableDataSource(this.manualAssignment);
  }

  /**
   * Configura el paginador
   * Manipula el paginador de la tabla de usuarios.
   */
  setPaginatorConfig() {
    this.dataSource.sort = this.sort;

    this.dataSource.paginator = this.paginator;

    this.paginator._intl.getRangeLabel = (
      page: number,
      pageSize: number,
      length: number
    ) => {
      if (length == 0 || pageSize == 0) {
        return `0 of ${length}`;
      }

      length = Math.max(length, 0);

      const startIndex = page * pageSize;
      const endIndex =
        startIndex < length
          ? Math.min(startIndex + pageSize, length)
          : startIndex + pageSize;

      return `Mostrando ${startIndex + 1} - ${endIndex} de ${length}`;
    };
    this.paginator._intl.itemsPerPageLabel = '';
  }

  isXlSize(): boolean {
    if (window.screen.width > 1280) {
      // 768px portrait
      return true;
    } else {
      return false;
    }
  }

  assignment(id, ramo) {
    let Dialog = this.dialog.open(BaseDialogComponent, {
      data: this.dialogOptions.selectDropDown(
        'Analista',
        this.optionsTestDropdown
      ),
      minWidth: 385,
    });

    Dialog.afterClosed().subscribe((selected) => {
      if (selected !== null) {
        const resultSelected = this.optionsTestDropdown.find(
          (value) => value.value === selected
        );
        setTimeout(() => {
          this.appComponent.showOverlay = true;
        });
        const bodyPost = {
          userId: resultSelected.value,
          requestId: id,
          ramo: ramo,
        };

        this.requestsService.escalateAnotherAnalist(bodyPost).subscribe(
          (result: any) => {
            this.getManualAssignment();
            this.appComponent.showOverlay = false;
            Dialog = this.dialog.open(BaseDialogComponent, {
              data: this.dialogOptions.confirmedAssignedAnalyst(
                resultSelected.viewValue
              ),
              minWidth: 385,
            });
          },
          (error) => {
            console.log(error);

            Dialog = this.dialog.open(BaseDialogComponent, {
              data: this.dialogOptions.errorServer,
              minWidth: 385,
            });
          }
        );
      }
    });
  }
}
