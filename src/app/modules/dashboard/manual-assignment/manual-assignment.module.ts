import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponentsModule } from '../../../global-shared/components/form-components/form-components.module';
import { GlobalSharedModule } from '../../../global-shared/global-shared.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../../../global-shared/modules/material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormComponentsModule,
    GlobalSharedModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatTableModule,
    CdkTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatPaginatorModule
  ],
  exports: []
})
export class ManualAssignmentModule { }
