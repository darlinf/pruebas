import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BaseDialogComponent } from '../../../global-shared/components/base-dialog/base-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogOptionService } from '../../../global-shared/global-services/dialog-option.service';
import { RolesService } from './services/roles.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  dataSource;
  selection;
  ELEMENT_DATA;
  itemsPerPage: number;
  roles;
  
  displayedColumns: string[] = ['select', 'roles', 'bouquet', 'country', 'maximumAmount', 'actions'];

  @ViewChild(MatSort, { static: true }) sort: MatSort
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  constructor(
    private dialog: MatDialog,
    private rolesService: RolesService,
    private dialogOption: DialogOptionService
    ) { }
    
  optionsTestDropdown = [
    {value: 1, viewValue: 'Yasmina Requena / Analista #1'},
    {value: 2, viewValue: 'Alícia Aguilera / Analista #2'},
    {value: 3, viewValue: 'Eduard Rodriguez Fernandez / Analista #3'},
    {value: 4, viewValue: 'Zaira Arnau / Analista #1'},
    {value: 5, viewValue: 'William Pavon / Analista #1'},
    {value: 6, viewValue: 'Rogelio Saenz / Analista #1'}
  ];
    
  ngOnInit() {
    this.getRoles();
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
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  getRoles(params: HttpParams = new HttpParams()) {
    let data;

    console.log(params);

    params = params.append('country', 'rd');

    this.rolesService.getRoles(params).subscribe(res => {
      data = res;
      console.log(data);
      this.roles = data.data;
      this.startDataSource(this.roles);
      this.setPaginatorConfig();
    });
  }

  /**
   * Inicializa la tabla
   * @param data
   */
   startDataSource(data) {
    // this.manualAssignment = data.data;
    this.dataSource = new MatTableDataSource(this.roles);
  }

  /**
   * Configura el paginador
   * Manipula el paginador de la tabla de usuarios.
   */
  setPaginatorConfig() {
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
  }

  isXlSize(): boolean {
		if (window.screen.width > 1280) { // 768px portrait
			return true;
		} else {
			return false;
		}
	}

  removeRole() {
    const Dialog = this.dialog.open(BaseDialogComponent, {
      data: this.dialogOption.deleteConfirm('asignación'),
      minWidth: 358
    });
    Dialog.afterClosed().subscribe((r) => {
      console.log(r);
    });
  }

  assignNewRoles() {
    const Dialog = this.dialog.open(BaseDialogComponent, {
      data: this.dialogOption.selectAssignRoles('USUARIO', this.optionsTestDropdown),
      minWidth: 385
    });
    Dialog.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
