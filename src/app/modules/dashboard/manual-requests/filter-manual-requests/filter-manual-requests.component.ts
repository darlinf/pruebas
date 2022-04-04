import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatProgressButtonOptions } from 'mat-progress-buttons';

@Component({
  selector: 'app-filter-manual-requests',
  templateUrl: './filter-manual-requests.component.html',
  styleUrls: ['./filter-manual-requests.component.scss']
})
export class FilterManualRequestsComponent implements OnInit {
//Posiblemente estos no sean los valores.
  statusTypes = [
    { value: 0, view: 'Incompleto' },
    { value: 1, view: 'Completo' },
    { value: 2, view: 'Enviado' },
    { value: 3, view: 'Cancelado' },
    { value: 4, view: 'Adjuntar Expediente' },
  ];

  @Output() public childEvent = new EventEmitter();
  filterForm: FormGroup;
	test = true;

  searchButton: MatProgressButtonOptions = {
		active: false,
		text: 'Buscar',
		buttonIcon: {
			fontIcon: 'search'
		},
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

	constructor(private fb: FormBuilder) {
	}

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      from: [''],
      to: [''],
      name: [''],
      status: [''],
      tipoSeguro: ['']
    });
  }

  sendFilterParamsToParent(filterParams?: FormData) {

	if (this.filterForm.get('from').value === null) {
		this.filterForm.get('from').setValue('');
	}
	if (this.filterForm.get('to').value === null) {
		this.filterForm.get('to').setValue('');
	}
	if (this.filterForm.get('name').value === null) {
		this.filterForm.get('name').setValue('');
	}
	if (this.filterForm.get('status').value === null) {
		this.filterForm.get('status').setValue('');
	}
	if (this.filterForm.get('tipoSeguro').value === null) {
		this.filterForm.get('tipoSeguro').setValue('');
	}

	const from = this.setDateFormatToYYYMMDD(this.filterForm.get('from').value);
	const to = this.setDateFormatToYYYMMDD(this.filterForm.get('to').value);

	let params = new HttpParams();
	params = params.append('name', this.filterForm.get('name').value);
	params = params.append('statusSolicitud', this.filterForm.get('status').value);

	// if (this.fills.fillType === 'tipoSeguro') {
	// 	params = params.append('tipoSeguro', this.filterForm.get('tipoSeguro').value);
	// } else {
	// 	params = params.append('nroPoliza', this.filterForm.get('nroPoliza').value);
	// }

    params = params.append('tipoSeguro', this.filterForm.get('tipoSeguro').value);

	if (from) { params = params.append('from', from); }
	if (to) { params = params.append('to', to); }

	this.childEvent.emit(params);
}

cleanFilter() {

	this.filterForm.get('from').setValue('');
	this.filterForm.get('to').setValue('');
	this.filterForm.get('name').setValue('');
	this.filterForm.get('status').setValue('');
	this.filterForm.get('tipoSeguro').setValue('');

	this.sendFilterParamsToParent();
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
}
