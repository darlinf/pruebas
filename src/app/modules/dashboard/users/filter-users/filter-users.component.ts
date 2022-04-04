import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { FieldConfig } from 'src/app/global-shared/components/form-components/models/field-config';
import { ResourceService } from 'src/app/global-shared/global-services/resource.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss']
})
export class FilterUsersComponent implements OnInit {
  @Output() public childEvent = new EventEmitter();
  filterForm: FormGroup;
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ramoOptions: FieldConfig =
    {
      label: 'Ramo',
      options: [],
      name: 'ramo',
    };

  countryOptions: FieldConfig =
  {
    label: 'País',
    options: [],
    name: 'country',
  };

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private resourceService: ResourceService
  ) { }

  ngOnInit(): void {
    this.initSearchForm();
    this.getRamo();
    this.getCountry();
  }

  private initSearchForm() {
    this.filterForm = this.fb.group({
      user: [''],
      ramo: [''],
      country: [''],
      maximumAmount: ['']
    });
  }

  sendFilterParamsToParent(filterParams?: FormData) {
    if (this.filterForm.get('user').value === null) {
        this.filterForm.get('user').setValue('');
    }
    if (this.filterForm.get('ramo').value === null) {
        this.filterForm.get('ramo').setValue('');
    }
    if (this.filterForm.get('country').value === null) {
        this.filterForm.get('country').setValue('');
    }
    if (this.filterForm.get('maximumAmount').value === null) {
        this.filterForm.get('maximumAmount').setValue('');
    }

    let params = new HttpParams();
    params = params.append('userId', this.filterForm.get('user').value);
    params = params.append('ramo', this.filterForm.get('ramo').value);
    params = params.append('country', this.filterForm.get('country').value);
    params = params.append('monto', this.filterForm.get('maximumAmount').value);
    
    this.childEvent.emit(params);
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

  getCountry(params: HttpParams = new HttpParams()) {
    let countries = [];
    params = params.append('country', 'rd');

    this.usersService.getUsers(params).subscribe((res) => {
      let data: any = res;

      data.data.forEach((value) => {
        if (value.country != '' && value.country != null) {
          countries.push({value: `${value.country}`,
          viewValue: `${value.country}`});
        }
      });
      this.countryOptions.options = countries;
    });
  }

  cleanFilter() {
    this.filterForm.get('user').setValue('');
    this.filterForm.get('ramo').setValue('');
    this.filterForm.get('country').setValue('');
    this.filterForm.get('maximumAmount').setValue('');

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
