import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/global-shared/modules/material/material.module';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { SplashScreenComponent } from '../../../../../splash-screen/splash-screen.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [],
  providers: [],
})
export class DashboardLayoutModule { }
