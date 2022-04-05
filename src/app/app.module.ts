import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalSharedModule } from 'src/app/global-shared/global-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModulesModule } from './modules/modules.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MaterialModule } from './global-shared/modules/material/material.module';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { AuthConfigModule } from './auth/auth-config.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GlobalSharedModule,
    FormsModule,
    ModulesModule,
		HttpClientModule,
		MatTableModule,
		MatSortModule,
		MatProgressButtonsModule.forRoot(),
		MaterialFileInputModule,
    MaterialModule,
    ReactiveFormsModule,
    AuthConfigModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
