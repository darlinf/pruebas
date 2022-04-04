import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FieldConfig } from 'src/app/global-shared/components/form-components/models/field-config';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent implements OnInit {
  contractorPayerFormGroup: FormGroup

  constructor(
    private fb: FormBuilder,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) { 
      this.matIconRegistry.addSvgIcon(
        "two-person-request-detail",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../../assets/iconos/two-person-request-detail.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "headline",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../../assets/iconos/headline.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "green-check",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../../assets/iconos/green-check.svg")
      );
    }

  ngOnInit(): void {
    this.contractorPayerForm();
  }

  private contractorPayerForm() {
    this.contractorPayerFormGroup = this.fb.group({
      name: [''],
      relationshipToTheInsured: [''],
      RNC: [''],
      commercialRegister:[''],
      countryWhereYouPayTaxesOnYourIncome: [''],
      economicActivity: ['']
    });
  }

  testOptions: FieldConfig =
    {
      label: 'Nivel de riesgo',
      options: [],
      name: 'Nivel de riesgo',
    };

    message() {
      alert('Probando el boton de los mensajes');
      // console.log(this.testOptions.options);
    }
}
