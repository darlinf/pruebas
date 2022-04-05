import { HttpParams } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResourceService } from 'src/app/global-shared/global-services/resource.service';
import { BaseDialogModel } from '../../roles/base-dialog-roles/models/base-dialog-model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-base-dialog-users',
  templateUrl: './base-dialog-users.component.html',
  styleUrls: ['./base-dialog-users.component.scss'],
})
export class BaseDialogUsersComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<BaseDialogUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogModel,
    private resourceService: ResourceService,
    private usersService: UsersService
  ) {}

  loading = false;
  submitted = false;
  users = [];
  mercados = [];
  ramos = [];
  dropDownValue = null;
  dropDownDisable = true;

  ramo = new FormControl('', Validators.required);
  countryCode = new FormControl('', Validators.required);
  userId = new FormControl('', Validators.required);
  minAmount = new FormControl('', Validators.required);
  maxAmount = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.data.email = 'ddddd';
    this.inputypeMontoMin = 'number';
    this.inputypeMontoMax = 'number';
    this.getMercados();
    this.getRamo();
    this.getUsers();
  }

  onNoClick(): void {
    this.dialogRef.close('cancel');
  }

  setDropDownValue(key, value) {
    this.dropDownValue = value;
    this.dropDownDisable = false;
  }

  getUsers() {
    let data;
    //params = params.append('country', 'rd');
    this.resourceService.getUserAssignmentAnalysts().subscribe((res) => {
      data = res;
      console.log(data.data);
      data.data.forEach((value) => {
        this.users.push({
          value: `${value.id}`,
          viewValue: `${value.name}`,
        });
      });
    });
  }

  getMercados() {
    this.resourceService.getMercados().subscribe((res) => {
      let data: any = res;
      data.data.forEach((value) => {
        this.mercados.push({
          value: `${value.countryCode}`,
          viewValue: `${value.name}`,
        });
      });
    });
  }

  getRamo() {
    this.resourceService.getRamo().subscribe((res) => {
      let data: any = res;
      data.data.forEach((value) => {
        this.ramos.push({ value: `${value.name}`, viewValue: `${value.name}` });
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
        this.userId.invalid === false &&
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
      userId: this.userId.value,
    };

    this.resourceService.postAssignUser(data).subscribe(
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
