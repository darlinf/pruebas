import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ResourceService } from '../../../../global-shared/global-services/resource.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/global-shared/components/form-components/models/field-config';
import { HttpParams } from '@angular/common/http';
import { RequestsServiceService } from '../../../../global-shared/global-services/requests-service.service';

@Component({
  selector: 'app-filter-manual-assignment',
  templateUrl: './filter-manual-assignment.component.html',
  styleUrls: ['./filter-manual-assignment.component.scss']
})
export class FilterManualAssignmentComponent implements OnInit {
  @Output() public childEvent = new EventEmitter();
  filterForm: FormGroup;

  @ViewChild(MatSort, { static: true }) sort: MatSort
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  reviewStatusOptions: FieldConfig =
  {
    label: 'Status',
    options: [],
    name: 'reviewStatus'
  };

  clientOptions: FieldConfig =
  {
    label: 'Cliente',
    options: [],
    name: 'client',
  };

  ramoOptions: FieldConfig =
    {
      label: 'Ramo',
      options: [],
      name: 'ramo',
    };

  constructor(
    private fb: FormBuilder,
    private resourceService: ResourceService,
    private requestsService: RequestsServiceService
  ) { }

  ngOnInit() { 
    this.initSearchForm();
    this.getReviewStatus();
    this.getClients();
    this.getRamo();
  }

  private initSearchForm() {
    this.filterForm = this.fb.group({
      noQuote: [''],
      reviewStatus: [''],
      client: [''],
      ramo: ['']
    });
  }

  sendFilterParamsToParent(filterParams?: FormData) {

    if (this.filterForm.get('noQuote').value === null) {
      this.filterForm.get('noQuote').setValue('');
    }
    if (this.filterForm.get('reviewStatus').value === null) {
      this.filterForm.get('reviewStatus').setValue('');
    }
    if (this.filterForm.get('client').value === null) {
      this.filterForm.get('client').setValue('');
    }
    if (this.filterForm.get('ramo').value === null) {
      this.filterForm.get('ramo').setValue('');
    }

		let params = new HttpParams();
		params = params.append('numeroCotizacion', this.filterForm.get('noQuote').value);
		params = params.append('status', this.filterForm.get('reviewStatus').value);
		params = params.append('name', this.filterForm.get('client').value);
		params = params.append('tipoSeguro', this.filterForm.get('ramo').value);
    
		this.childEvent.emit(params);
	}

  getClients(params: HttpParams = new HttpParams()) {
    let clients = [];

    params = params.append('country', this.requestsService.decodedToken.Country);

    this.requestsService.getRequests(params).subscribe((res) => {
      let data: any = res;

      data.data.forEach((value) => {
        if (value.nombres != '' && value.nombres != null) {
          clients.push({value: `${value.nombres} ${value.apellidos}`,
          viewValue: `${value.nombres} ${value.apellidos}`});
        }
        
      });
      this.clientOptions.options = clients;
    });
  }

  getReviewStatus() {
    let status = [];

    this.resourceService.getReviewStatus().subscribe((res) => {
      let data: any = res;
      data.data.forEach((value) => {
        status.push({value: `${value.name}`,
        viewValue: `${value.name}`});
      });
      this.reviewStatusOptions.options = status;
    });
  }

  getRamo() {
    let ramos = [];

    this.resourceService.getRamo().subscribe((res) => {
      let data: any = res;

      data.data.forEach((value) => {
        ramos.push({value:`${value.name}`,
        viewValue: `${value.name}`});
      });

      this.ramoOptions.options = ramos;
    });
  }

  cleanFilter() {
    this.filterForm.get('noQuote').setValue('');
    this.filterForm.get('reviewStatus').setValue('');
    this.filterForm.get('client').setValue('');
    this.filterForm.get('ramo').setValue('');
    this.sendFilterParamsToParent();
  }

  isXlSize(): boolean {
		if (window.screen.width > 1280) { // 768px portrait
			return true;
		} else {
			return false;
		}
	}
}
