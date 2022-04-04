import { NgModule } from "@angular/core";
import { MaterialModule } from '../../global-shared/modules/material/material.module';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { CommonModule } from '@angular/common';
import { DashboardLayoutModule } from "./shared/layout/dashboard-layout/dashboard-layout.module";
import { FormComponentsModule } from '../../global-shared/components/form-components/form-components.module';
import { GlobalSharedModule } from '../../global-shared/global-shared.module';
import { SharedModule } from "./shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ManualAssignmentComponent } from "./manual-assignment/manual-assignment.component";
import { RolesComponent } from "./roles/roles.component";
import { FilterManualAssignmentComponent } from './manual-assignment/filter-manual-assignment/filter-manual-assignment.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { UsersComponent } from './users/users.component';
import { FilterUsersComponent } from './users/filter-users/filter-users.component';
import { FilterRolesComponent } from './roles/filter-roles/filter-roles.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { RequestDetailComponent } from './analist-subscription-requests/request-detail/request-detail.component';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";


@NgModule({
    declarations: [
    DashboardComponent,
    ManualAssignmentComponent,
    FilterManualAssignmentComponent,
    RolesComponent,
    UsersComponent,
    FilterUsersComponent,
    FilterRolesComponent,
    RequestDetailComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        DashboardRoutingModule,
        DashboardLayoutModule,
        RouterModule,
        FormComponentsModule,
        GlobalSharedModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatStepperModule
    ],
    providers: [
      {
        provide: STEPPER_GLOBAL_OPTIONS,
        useValue: {displayDefaultIndicatorType: false},
      },
    ],
    exports: [MaterialModule]
})

// ,
//   providers: [
//     {
//       provide: STEPPER_GLOBAL_OPTIONS,
//       useValue: {displayDefaultIndicatorType: false},
//     },
//   ]
export class DashboardModule {}