import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/global-shared/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AddArrayButtonComponent } from './add-array-button/add-array-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DatePickerOnlymonthComponent } from './date-picker-onlymonth/date-picker-onlymonth.component';
import { DeleteArrayButtonComponent } from './delete-array-button/delete-array-button.component';
import { FileInputComponent } from './file-input/file-input.component';
import { InputComponent } from './input/input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { TextAreaComponent } from './text-area/text-area.component';


@NgModule({
  declarations: [
    AddArrayButtonComponent,
    CheckboxComponent,
    DatePickerComponent,
    DatePickerOnlymonthComponent,
    DeleteArrayButtonComponent,
    FileInputComponent,
    InputComponent,
    NumberInputComponent,
    RadioButtonComponent,
    SelectComponent,
    TextAreaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule,
		NgxMaskModule,
		MaterialFileInputModule
  ],
  exports: [
    AddArrayButtonComponent,
    CheckboxComponent,
    DatePickerComponent,
    DatePickerOnlymonthComponent,
    DeleteArrayButtonComponent,
    FileInputComponent,
    InputComponent,
    NumberInputComponent,
    RadioButtonComponent,
    SelectComponent,
    TextAreaComponent
	],
})
export class FormComponentsModule { }
