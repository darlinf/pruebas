import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { FieldConfig } from 'src/app/global-shared/components/form-components/models/field-config';
import { RequestsServiceService } from 'src/app/global-shared/global-services/requests-service.service';

@Component({
  selector: 'app-filter-analist-subscription',
  templateUrl: './filter-analist-subscription.component.html',
  styleUrls: ['./filter-analist-subscription.component.scss']
})
export class FilterAnalistSubscriptionComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();
	filterForm: FormGroup;

  statusOptions: FieldConfig =
  {
    label: 'Status',
    options: [
      // {
      //   value: 'new',
      //   viewValue: 'New',
      // },
    ],
    name: 'status',
  };

  clientOptions: FieldConfig =
  {
    label: 'Cliente',
    options: [
      // {
      //   value: '',
      //   viewValue: '',
      // },
    ],
    name: 'client',
  };

  ramoOptions: FieldConfig =
  {
    label: 'Ramo',
    options: [
      // {
      //   value: 'Salud',
      //   viewValue: 'Salud',
      // },
    ],
    name: 'ramo',
  };


  constructor(private fb: FormBuilder, private requestService: RequestsServiceService,) { }

  ngOnInit(): void {

    this.filterForm = this.fb.group({
      number: [''],
      status: [''],
      client: [''],
      ramo: [''],
    });

    this.getRequests();
    this.getStatus();
    this.getRamo();
  }

  sendFilterParamsToParent(filterParams?: FormData) {
		// const date = this.setDateFormatToYYYMMDD(this.filterForm.get('date').value);
		// const to = this.setDateFormatToYYYMMDD(this.filterForm.get('to').value);

    if (this.filterForm.get('number').value === null) {
      this.filterForm.get('number').setValue('');
    }
    if (this.filterForm.get('status').value === null) {
      this.filterForm.get('status').setValue('');
    }
    if (this.filterForm.get('client').value === null) {
      this.filterForm.get('client').setValue('');
    }
    if (this.filterForm.get('ramo').value === null) {
      this.filterForm.get('ramo').setValue('');
    }

		let params = new HttpParams();
		params = params.append('numeroCotizacion', this.filterForm.get('number').value);
		params = params.append('status', this.filterForm.get('status').value);
		params = params.append('name', this.filterForm.get('client').value);
		params = params.append('tipoSeguro', this.filterForm.get('ramo').value);

		// if (date) { params = params.append('date', date); }
		// if (to) { params = params.append('to', to); }

		this.childEvent.emit(params);
	}

  setDateFormatToYYYMMDD(datePickerValue) {
		let date;
		if (datePickerValue) {
			const yyyy = datePickerValue.getFullYear();
			const mm = datePickerValue.getMonth() + 1;
			const dd = datePickerValue.getDate();
			date = (`${yyyy}-${mm}-${dd}`);
		}

		return date;
	}

  isXlSize(): boolean {
		if (window.screen.width > 1280) { // 768px portrait
			return true;
		} else {
			return false;
		}
	}

  getRequests(params: HttpParams = new HttpParams()){

    params = params.append('country', this.requestService.decodedToken.Country);

    let clientValues = [];

    this.requestService.getRequests(params)
    .subscribe(res => {
      console.log('hola filter');
      // console.log(res);
      let data: any = res;

      data.data.forEach(function (value) {
        // console.log(value.nombres);
        if (value.nombres != '' && value.nombres != null) {
          clientValues.push({value: `${value.nombres} ${value.apellidos}`,
          viewValue: `${value.nombres} ${value.apellidos}`});
        }
      }); 

      // console.log(clientValues);

      this.clientOptions.options = clientValues;
    }, err => console.log(err));
  }

  getStatus(){

    let statusesValues = [];

    this.requestService.getStatuses()
    .subscribe(res => {
      // console.log(res);
      let data: any = res;

      data.data.forEach(function (value) {
        // if (value.nombres != '' && value.nombres != null) {
          statusesValues.push({value: `${value.name}`,
          viewValue: `${value.name}`});
        // }
      }); 

      this.statusOptions.options = statusesValues;
    }, err => console.log(err));
  }

  getRamo(){

    let ramoValues = [];

    this.requestService.getRamos()
    .subscribe(res => {
      // console.log(res);
      let data: any = res;

      data.data.forEach(function (value) {
        // if (value.nombres != '' && value.nombres != null) {
          ramoValues.push({value: `${value.name}`,
          viewValue: `${value.name}`});
        // }
      }); 

      this.ramoOptions.options = ramoValues;
    }, err => console.log(err));
  }

  cleanFilter() {

    this.filterForm.get('number').setValue('');
    this.filterForm.get('status').setValue('');
    this.filterForm.get('client').setValue('');
    this.filterForm.get('ramo').setValue('');

    this.sendFilterParamsToParent();
  }
}
