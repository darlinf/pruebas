import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResourceService } from 'src/app/global-shared/global-services/resource.service';
import { BaseDialogModel } from '../base-dialog-roles/models/base-dialog-model';

@Component({
  selector: 'app-base-dialog-delete-role',
  templateUrl: './base-dialog-delete-role.component.html',
  styleUrls: ['./base-dialog-delete-role.component.scss'],
})
export class BaseDialogDeleteRoleComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BaseDialogDeleteRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogModel,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.data.email = '';
  }

  deleteUserRule() {
    console.log(this.data.id);
    this.resourceService.deleteRoleRule(this.data.id).subscribe(
      (res) => {
        console.log(res);
      },
      (e) => console.error(e)
    );
  }

  onNoClick(): void {
    this.dialogRef.close('cancel');
  }

  dropDownValue = null;
  dropDownDisable = true;

  setDropDownValue(selectedValue) {
    this.dropDownValue = selectedValue;
    this.dropDownDisable = false;
  }
}
