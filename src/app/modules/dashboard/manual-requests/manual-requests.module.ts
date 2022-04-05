import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManualRequestsComponent } from './manual-requests.component';
import { GlobalSharedModule } from '../../../global-shared/global-shared.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterManualRequestsComponent } from './filter-manual-requests/filter-manual-requests.component';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { ManualRequestsRoutingModule } from './manual-requests-routing.module';

@NgModule({
  declarations: [
    ManualRequestsComponent,
    FilterManualRequestsComponent
  ],
  imports: [
    CommonModule,
    GlobalSharedModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressButtonsModule,
    ManualRequestsRoutingModule,
  ]
})
export class ManualRequestsModule { }

