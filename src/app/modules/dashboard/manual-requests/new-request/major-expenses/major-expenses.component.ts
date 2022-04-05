import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-major-expenses',
  templateUrl: './major-expenses.component.html',
  styleUrls: ['./major-expenses.component.scss']
})
export class MajorExpensesComponent implements OnInit {

  disabilityGroup: FormGroup;
  @ViewChild('form', { static: false }) form;
  ID = null;

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {

    this.disabilityGroup = this.fb.group({
      questionnaires: this.fb.group({
        solicitudHipertensionArterial: this.fb.group({}),
        solicitudDiabetes: this.fb.group({}),
        solicitudArtitris: this.fb.group({}),
        columnaVertebralColumnaVertebral: this.fb.group({}),
        solicitudMusculoesqueleticos: this.fb.group({}),
        solicitudCardioVasculares: this.fb.group({}),
        solicitudRenales: this.fb.group({}),
        knowYourClientPayer: this.fb.group({}),
        knowYourCustomerContratante: this.fb.group({}),
        antiLaundering: this.fb.group({}),
        solicitudEstadoFinancieroConfidencial: this.fb.group({}),
        solicitudBuceo: this.fb.group({}),
        solicitudMontanismo: this.fb.group({}),
        solicitudMoto: this.fb.group({}),
        solicitudAviacion: this.fb.group({}),
        solicitudProstatica: this.fb.group({}),
      }),
    });
  }

  showWarningDot(form: any): boolean {

    if (this.form !== undefined) {
      if (!this.ID) {
        if (form.invalid && this.form.submitted) {
          return true;
        } else {
          return false;
        }

      } else {
        if (!form.invalid) {
          return false;
        } else {
          return true;
        }
      }
    }

  }
}
