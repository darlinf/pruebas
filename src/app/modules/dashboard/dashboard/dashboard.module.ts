import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { FormComponentsModule } from 'src/app/global-shared/components/form-components/form-components.module';
import { GlobalSharedModule } from 'src/app/global-shared/global-shared.module';
import { MaterialModule } from 'src/app/global-shared/modules/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';



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
    MatTableModule
  ]
})
export class DashboardModule { }
