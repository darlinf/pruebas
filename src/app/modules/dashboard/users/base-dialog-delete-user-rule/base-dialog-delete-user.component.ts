import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ResourceService } from 'src/app/global-shared/global-services/resource.service';
import { BaseDialogModel } from '../../roles/base-dialog-roles/models/base-dialog-model';

@Component({
  selector: 'app-base-dialog-delete-user',
  templateUrl: './base-dialog-delete-user.component.html',
  styleUrls: ['./base-dialog-delete-user.component.scss'],
})
export class BaseDialogDeleteUserRuleComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BaseDialogDeleteUserRuleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BaseDialogModel,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.data.email = '';
  }

  deleteUserRule() {
    this.resourceService.deleteUserRule(this.data.id).subscribe(
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
