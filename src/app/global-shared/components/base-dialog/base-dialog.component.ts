import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseDialogModel } from './models/base-dialog-model';

@Component({
  selector: 'app-base-dialog',
  templateUrl: './base-dialog.component.html',
  styleUrls: ['./base-dialog.component.scss']
})
export class BaseDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BaseDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: BaseDialogModel
  ) { }

  ngOnInit(): void {
    this.data.email = '';
  }

  onNoClick(): void {
		this.dialogRef.close();
	}

  dropDownValue = null;
  dropDownDisable = true;

  setDropDownValue(selectedValue) {
    this.dropDownValue = selectedValue;
    this.dropDownDisable = false;
  }
}
