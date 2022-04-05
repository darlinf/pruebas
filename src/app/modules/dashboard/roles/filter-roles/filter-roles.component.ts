import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/global-shared/components/form-components/models/field-config';
import { ResourceService } from '../../../../global-shared/global-services/resource.service';
import { RolesService } from '../services/roles.service';

@Component({
    selector: 'app-filter-roles',
    templateUrl: './filter-roles.component.html',
    styleUrls: ['./filter-roles.component.scss']
})
export class FilterRolesComponent implements OnInit {
    @Output() public childEvent = new EventEmitter();
    filterForm: FormGroup;

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
        private rolesService: RolesService,
        private resourceService: ResourceService
    ) {}

    ngOnInit(): void {
        this.initSearchForm();
        this.getRamo();
        this.getCountry();
    }

    private initSearchForm() {
        this.filterForm = this.fb.group({
            role: [''],
            ramo: [''],
            country: [''],
            maximumAmount: ['']
        });
    }

    sendFilterParamsToParent(filterParams?: FormData) {
        if (this.filterForm.get('role').value === null) {
            this.filterForm.get('role').setValue('');
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
        params = params.append('roleId', this.filterForm.get('role').value);
        params = params.append('ramo', this.filterForm.get('ramo').value);
        params = params.append('country', this.filterForm.get('country').value);
        params = params.append('amount', this.filterForm.get('maximumAmount').value);
        
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
    
        this.rolesService.getRoles(params).subscribe((res) => {
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
        this.filterForm.get('role').setValue('');
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