import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRequestRoutingModule } from './new-request-routing.module';
import { NewRequestComponent } from './new-request.component';
import { GlobalSharedModule } from '../../../../global-shared/global-shared.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MajorExpensesComponent } from './major-expenses/major-expenses.component';
import { LifeComponent } from './life/life.component';
import { DisabilityComponent } from './disability/disability.component';
import { KnowYourCustomerComponent } from 'src/app/global-shared/components/sub-forms/know-your-customer/know-your-customer.component';
import { MaterialModule } from 'src/app/global-shared/modules/material/material.module';

@NgModule({
  declarations: [NewRequestComponent, MajorExpensesComponent, LifeComponent, DisabilityComponent],
  imports: [
    CommonModule,
    NewRequestRoutingModule,
    GlobalSharedModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ], providers: [
    KnowYourCustomerComponent
  ],
  exports: [NewRequestComponent]
})
export class NewRequestModule { }
