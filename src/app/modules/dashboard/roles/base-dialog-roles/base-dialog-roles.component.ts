import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogModel } from 'src/app/global-shared/components/base-dialog/models/base-dialog-model';
import { ResourceService } from 'src/app/global-shared/global-services/resource.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-base-roles-dialog',
  templateUrl: './base-dialog-roles.component.html',
  styleUrls: ['./base-dialog-roles.component.scss'],
})
export class BaseDialogRolesComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<BaseDialogRolesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogModel,
    private resourceService: ResourceService
  ) {}

  loading = false;
  submitted = false;
  ramos = [];
  mercados = [];
  roles = [];
  dropDownValue = null;
  dropDownDisable = true;

  ramo = new FormControl('', Validators.required);
  countryCode = new FormControl('', Validators.required);
  roleId = new FormControl('', Validators.required);
  minAmount = new FormControl('', Validators.required);
  maxAmount = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.data.email = 'ddddd';
    this.inputypeMontoMin = 'number';
    this.inputypeMontoMax = 'number';
    this.getRamo();
    this.getMercados();
    this.getRoles();
  }

  onNoClick(): void {
    this.dialogRef.close('cancel');
  }

  setDropDownValue(key, value) {
    this.dropDownValue = value;
    this.dropDownDisable = false;
  }

  getRamo() {
    this.resourceService.getRamo().subscribe((res) => {
      let data: any = res;
      data.data.forEach((value) => {
        this.ramos.push({ value: `${value.name}`, viewValue: `${value.name}` });
      });
    });
  }

  getMercados() {
    this.resourceService.getMercados().subscribe((res) => {
      let data: any = res;
      console.log(data);
      data.data.forEach((value) => {
        this.mercados.push({
          value: `${value.countryCode}`,
          viewValue: `${value.name}`,
        });
      });
    });
  }

  getRoles() {
    this.resourceService.getRoles().subscribe((res) => {
      let data: any = res;
      data.data.forEach((value) => {
        this.roles.push({ value: `${value.id}`, viewValue: `${value.name}` });
      });
    });
  }

  onSubmit() {
    this.submitted = true;

    if (
      !(
        this.ramo.invalid === false &&
        this.maxAmount.invalid === false &&
        this.minAmount.invalid === false &&
        this.roleId.invalid === false &&
        this.countryCode.invalid === false
      )
    ) {
      return;
    }

    var data = {
      ramo: this.ramo.value,
      minAmount: this.minAmount.value,
      maxAmount: this.maxAmount.value,
      countryCode: this.countryCode.value,
      roleId: this.roleId.value,
    };

    this.resourceService.postAssignRole(data).subscribe(
      (data) => {
        console.log(data);
        this.dialogRef.close();
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  //////////////////////////////////////////////////////////
  currencyFormatValueMontoMax: Number;
  currencyFormatValueMontoMin: Number;
  inputypeMontoMax = '';
  inputypeMontoMin = '';

  unsetCurrencyFormat(e, inputConfig) {
    if (inputConfig === 'Monto max') {
      this.inputypeMontoMax = 'number';
      this.currencyFormatValueMontoMax = parseInt(
        e.target.value.replace(/\,/g, '')
      );
    }
    if (inputConfig === 'Monto min') {
      this.inputypeMontoMin = 'number';
      this.currencyFormatValueMontoMin = parseInt(
        e.target.value.replace(/\,/g, '')
      );
    }
  }

  setCurrencyFormat(e, inputConfig) {
    if (inputConfig === 'Monto max') {
      this.inputypeMontoMax = 'text';
      this.currencyFormatValueMontoMax = e.target.value
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    if (inputConfig === 'Monto min') {
      this.inputypeMontoMin = 'text';
      this.currencyFormatValueMontoMin = e.target.value
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
}
