import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { GlobalSharedModule } from 'src/app/global-shared/global-shared.module';
import { MaterialModule } from 'src/app/global-shared/modules/material/material.module';

@NgModule({
  declarations: [],
  imports: [
      CommonModule, 
      MaterialModule, 
      GlobalSharedModule, 
      FormsModule, 
      ReactiveFormsModule, 
      HttpClientModule, 
      MaterialFileInputModule
    ],
  exports: [
    MaterialFileInputModule
  ]
})
export class SharedModule { }
