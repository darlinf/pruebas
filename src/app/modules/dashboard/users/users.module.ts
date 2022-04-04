import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterUsersComponent } from './filter-users/filter-users.component';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormComponentsModule } from 'src/app/global-shared/components/form-components/form-components.module';
import { GlobalSharedModule } from 'src/app/global-shared/global-shared.module';
import { MaterialModule } from 'src/app/global-shared/modules/material/material.module';
import { SharedModule } from '../shared/shared.module';

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
  ]
})
export class UsersModule { }
