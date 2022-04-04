import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/global-shared/modules/material/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormComponentsModule } from './components/form-components/form-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { BaseDialogComponent } from './components/base-dialog/base-dialog.component';
import { RequestTableStatusPipe } from './global-pipes/request-table-status.pipe';
import { ManualRequestTableStatusPipe } from './global-pipes/manual-request-table-status.pipe';
import { ArthritisComponent } from './components/sub-forms/arthritis/arthritis.component';
import { CardiovascularComponent } from './components/sub-forms/cardiovascular/cardiovascular.component';
import { DivingComponent } from './components/sub-forms/diving/diving.component';
import { FinancialStatusComponent } from './components/sub-forms/financial-status/financial-status.component';
import { HypertensionComponent } from './components/sub-forms/hypertension/hypertension.component';
import { KnowYourClientComponent } from './components/sub-forms/know-your-client/know-your-client.component';
import { KnowYourCustomerComponent } from './components/sub-forms/know-your-customer/know-your-customer.component';
import { MellitusDiabetesComponent } from './components/sub-forms/mellitus-diabetes/mellitus-diabetes.component';
import { MoneyLaunderingComponent } from './components/sub-forms/money-laundering/money-laundering.component';
import { MountaineeringComponent } from './components/sub-forms/mountaineering/mountaineering.component';
import { MusculoskeletalComponent } from './components/sub-forms/musculoskeletal/musculoskeletal.component';
import { ProstaticComponent } from './components/sub-forms/prostatic/prostatic.component';
import { RacingComponent } from './components/sub-forms/racing/racing.component';
import { RenalUrinaryComponent } from './components/sub-forms/renal-urinary/renal-urinary.component';
import { DiseasesInfoComponent } from './components/sub-forms/services/diseases-info/diseases-info.component';
import { SkydivingComponent } from './components/sub-forms/skydiving/skydiving.component';
import { SpineComponent } from './components/sub-forms/spine/spine.component';
// import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialFileInputModule } from 'ngx-material-file-input';

@NgModule({
	declarations: [BaseDialogComponent, RequestTableStatusPipe, ManualRequestTableStatusPipe, ArthritisComponent, 
		CardiovascularComponent, DivingComponent, FinancialStatusComponent, HypertensionComponent, 
		KnowYourClientComponent, KnowYourCustomerComponent, MellitusDiabetesComponent, MoneyLaunderingComponent, 
		MountaineeringComponent, MusculoskeletalComponent, ProstaticComponent, RacingComponent, 
		RenalUrinaryComponent, DiseasesInfoComponent, SkydivingComponent, SpineComponent ], //NotFoundComponent
	imports: [CommonModule, MaterialModule, FormComponentsModule, MatDialogModule, FormsModule, NgxMaskModule, 
		ReactiveFormsModule, HttpClientModule, MaterialFileInputModule],
	exports: [FormComponentsModule, MaterialModule, RequestTableStatusPipe, ManualRequestTableStatusPipe,
		ArthritisComponent, CardiovascularComponent, DivingComponent, FinancialStatusComponent, 
		HypertensionComponent, KnowYourClientComponent, KnowYourCustomerComponent, MellitusDiabetesComponent, 
		MoneyLaunderingComponent, MountaineeringComponent, MusculoskeletalComponent, ProstaticComponent, 
		RacingComponent, RenalUrinaryComponent, DiseasesInfoComponent, SkydivingComponent, SpineComponent,
		MaterialFileInputModule],
	entryComponents: [BaseDialogComponent]
})
export class GlobalSharedModule { }
