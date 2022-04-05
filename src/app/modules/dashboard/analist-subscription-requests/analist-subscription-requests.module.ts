import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalistSubscriptionRequestsComponent } from './analist-subscription-requests.component';
import { FilterAnalistSubscriptionComponent } from './filter-analist-subscription/filter-analist-subscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GlobalSharedModule } from '../../../global-shared/global-shared.module';
import { AnalistSubscriptionRequestRoutindModule } from './analist-subscription-requests-routing.module';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@NgModule({
  declarations: [
    FilterAnalistSubscriptionComponent,
    AnalistSubscriptionRequestsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    GlobalSharedModule
    // AnalistSubscriptionRequestRoutindModule
  ]
})
export class AnalistSubscriptionRequestsModule { }
