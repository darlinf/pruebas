import { Injectable } from '@angular/core';
import { Form, FormGroup, AbstractControl, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BaseDialogComponent } from '../components/base-dialog/base-dialog.component';
import { DialogOptionService } from '../global-services/dialog-option.service';
import { Router } from '@angular/router';
// import { ClaimService } from '../../../modules/dashboard/claims/new-claim/claim-types/claim/services/claim.service';
// import { RefundService } from '../../../modules/dashboard/claims/new-claim/claim-types/refund/services/refund.service';
// import { NewAuthorizationService } from '../../../modules/dashboard/authorizations/new-authorization/services/new-authorization.service';
import { LifeService } from 'src/app/modules/dashboard/manual-requests/new-request/life/services/life.service';
import { MajorExpensesService } from 'src/app/modules/dashboard/manual-requests/new-request/major-expenses/services/major-expenses.service';
import { DisabilityService } from 'src/app/modules/dashboard/manual-requests/new-request/disability/services/disability.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AppComponent } from 'src/app/app.component';
import { Observable, Subject } from 'rxjs';
// import { RequestsService } from 'src/app/modules/invitation/services/requests.service';
// import { UserService } from '../user/user.service';
// import { FormsService } from '../../../modules/dashboard/services/forms/forms.service';
// import { SettingsService } from '../../../modules/dashboard/settings/services/settings.service';
// import { PolicyAdministrationService } from '../../../modules/dashboard/policy-administration/services/policy-administration.service';
import { map } from 'rxjs/operators';
// import { QuoteService } from 'src/app/modules/dashboard/dynamic-pa/services/quote.service';
// import { ChangeService } from '../../../modules/dashboard/dynamic-pa/services/change.service';
// import { DynamicPaService } from '../../../modules/dashboard/dynamic-pa/services/dynamic-pa.service';
import { RequestsServiceService } from './requests-service.service';

@Injectable({
  providedIn: 'root'
})
export class FormHandlerService {

  sendedForm;
  errorServer = this.dialogOption.errorServer;
  constructor(
    private dialog: MatDialog,
    private dialogOption: DialogOptionService,
    private route: Router,
    // private claimService: ClaimService,
    // private refundService: RefundService,
    // private newAuthorizationService: NewAuthorizationService,
    private lifeService: LifeService,
    private majorExpensesService: MajorExpensesService,
    private disabilityService: DisabilityService,
    private http: HttpClient,
    private fb: FormBuilder,
    // private requestService: RequestsService,
    // private userService: UserService,
    // private formsService: FormsService,
    // private settingsService: SettingsService,
    // private policyAdministrationService: PolicyAdministrationService,
    // private dynamicQuoteService: QuoteService,
    // private changeService: ChangeService,
    // private dynamicPaService: DynamicPaService,
    private requestService2: RequestsServiceService
  ) { }

  sendForm(form: FormGroup, name: string, type?: string, appComponent?: any, id?: number, isInvitation?: boolean) {
    console.log('Impresion de formulario down here: ', form);
    this.dialogHandler(form, name, type, appComponent, id, isInvitation);
  }

  dialogHandler(form: FormGroup, name: string, type: string, appComponent?: any, id?: number, isInvitation?: boolean) {
    let Dialog;
    let dataOpen;
    let dataClosing;
    let route;
    console.log('isInvitation', isInvitation);

    const ID = id;
    console.log('ID', ID);

    switch (name) {
      case 'claims-reclaim':
        if (type === 'send') {
          dataOpen = this.dialogOption.sendForm('Reclamo');
          dataClosing = this.dialogOption.confirmedForm('Reclamo');
        } else if (type === 'save') {
          dataOpen = this.dialogOption.saveForm('Reclamo');
          dataClosing = this.dialogOption.confirmedSavedForm('Reclamo');
        }
        route = 'dashboard/claims';
        break;

      case 'form':
        if (type === 'send') {
          dataOpen = this.dialogOption.sendForm('creaci??n de formulario');
          dataClosing = this.dialogOption.confirmedForm('creaci??n de formulario');
        } else if (type === 'save') {
          dataOpen = this.dialogOption.saveForm('creaci??n de formulario');
          dataClosing = this.dialogOption.confirmedSavedForm('creaci??n de formulario');
        }
        route = 'dashboard/forms';
        break;

      case 'claims-refund':
        if (type === 'send') {
          dataOpen = this.dialogOption.sendForm('Reembolso');
          dataClosing = this.dialogOption.confirmedForm('Reembolso');
        } else if (type === 'save') {
          dataOpen = this.dialogOption.saveForm('Reembolso');
          dataClosing = this.dialogOption.confirmedSavedForm('Reembolso');
        }
        route = 'dashboard/claims';
        break;

      case 'new-authorization':
        if (type === 'send') {
          dataOpen = this.dialogOption.sendForm('Autorizaci??n');
          dataClosing = this.dialogOption.confirmedForm('Autorizaci??n');
        } else if (type === 'save') {
          dataOpen = this.dialogOption.saveForm('Autorizaci??n');
          dataClosing = this.dialogOption.confirmedSavedForm('Autorizaci??n');
        }
        route = 'dashboard/authorizations';
        break;

      case 'life':
        if (type === 'send') {
          dataOpen = this.dialogOption.sendForm('seguro de Vida');
          dataClosing = this.dialogOption.confirmedForm('seguro de Vida');
        } else if (type === 'save') {
          dataOpen = this.dialogOption.saveForm('seguro de Vida');
          dataClosing = this.dialogOption.confirmedSavedForm('seguro de Vida');
        } else if (type === 'invitation') {
          dataOpen = this.dialogOption.sendInvitationLink;
          dataClosing = this.dialogOption.confirmedInvitationForm('seguro de Vida');
        }
        route = 'dashboard/manual-requests';
        break;

      case 'major-expenses':
        if (type === 'send') {
          dataOpen = this.dialogOption.sendForm('seguro Gastos M??dicos Mayores');
          dataClosing = this.dialogOption.confirmedForm('seguro Gastos M??dicos Mayores');
        } else if (type === 'save') {
          dataOpen = this.dialogOption.saveForm('seguro Gastos M??dicos Mayores');
          dataClosing = this.dialogOption.confirmedSavedForm('seguro Gastos M??dicos Mayores');
        } else if (type === 'invitation') {
          dataOpen = this.dialogOption.sendInvitationLink;
          dataClosing = this.dialogOption.confirmedInvitationForm('seguro Gastos M??dicos Mayores');
        }
        route = 'dashboard/manual-requests';
        break;

      case 'disability':
        if (type === 'send') {
          dataOpen = this.dialogOption.sendForm('suscripcion Disability');
          dataClosing = this.dialogOption.confirmedForm('suscripcion Disability');
        } else if (type === 'save') {
          dataOpen = this.dialogOption.saveForm('suscripcion Disability');
          dataClosing = this.dialogOption.confirmedSavedForm('suscripcion Disability');
        } else if (type === 'invitation') {
          dataOpen = this.dialogOption.sendInvitationLink;
          dataClosing = this.dialogOption.confirmedInvitationForm('suscripcion Disability');
        }
        route = 'dashboard/manual-requests';
        break;

      case 'dynamic-pa':
        if (type === 'send') {
          dataOpen = this.dialogOption.sendForm('cambio');
          dataClosing = this.dialogOption.confirmedForm('cambio');
        } else if (type === 'save') {
          dataOpen = this.dialogOption.saveForm('cambio');
          dataClosing = this.dialogOption.confirmedSavedForm('cambio');
        } else if (type === 'invitation') {
          dataOpen = this.dialogOption.sendInvitationLink;
          dataClosing = this.dialogOption.confirmedInvitationForm('cambio');
        }
        route = 'dashboard/dynamic-pa';
        break;
    }

    if (type === 'cancel') {
      this.navigateToMenu(route);
      return;
    }

    Dialog = this.dialog.open(BaseDialogComponent, {
      data: dataOpen,
      minWidth: 385,
    });

    Dialog.afterClosed().subscribe((result) => {
      if (!form.get('isComplete')) {
        form.addControl('isComplete', this.fb.control(''));
      }
      if (!form.invalid) {
        form.get('isComplete').setValue(true);
      } else {
        form.get('isComplete').setValue(false);
      }

      form.removeControl('countryRoleCode');
      // if (this.userService.getRoles().includes('WWS') && this.userService.getRoles().includes('WMA')) {
      //   form.addControl('countryRoleCode', this.fb.control(localStorage.getItem('countryCode')));
      // }
      form.addControl('countryRoleCode', this.fb.control(this.requestService2.decodedToken.Country));

      this.sendedForm = form.getRawValue();
      const json = JSON.stringify(this.sendedForm);
      const printJson = JSON.stringify(this.sendedForm, null, 2);
      console.log(printJson);
      switch (type) {
        case 'invitation':
          console.log(result);
          if (result) {
            let dialog;

            form.addControl('anonimousUser', this.fb.group({
              email: [result]
            }));

            const invitationForm = form.getRawValue();
            const invitationJson = JSON.stringify(invitationForm);
            console.log(invitationJson);

            switch (name) {
              case 'life':
                appComponent.showOverlay = true;
                this.lifeService.postRequest(invitationJson)
                  .subscribe(res => {
                    this.correctSend(res, dialog, dataClosing, route);
                    appComponent.showOverlay = false;
                  }, (err) => {
                    this.badSend(err, dialog);
                  });
                break;

              case 'major-expenses':
                appComponent.showOverlay = true;
                this.majorExpensesService.postRequest(invitationJson)
                  .subscribe(res => {
                    this.correctSend(res, dialog, dataClosing, route);
                    appComponent.showOverlay = false;
                  }, (err) => {
                    this.badSend(err, dialog);
                  });
                break;

              case 'disability':
                appComponent.showOverlay = true;
                this.disabilityService.postRequest(invitationJson)
                  .subscribe(res => {
                    this.correctSend(res, dialog, dataClosing, route);
                    appComponent.showOverlay = false;
                  }, (err) => {
                    this.badSend(err, dialog);
                  });
                break;

              default:
                break;
            }
          }
          break;

        case 'save':
          if (result === 'true') {
            let dialog;
            switch (name) {
              case 'claims-reclaim':
                // appComponent.showOverlay = true;
                // this.claimService.postClaim(json)
                //   .subscribe(res => {
                //     this.correctSend(res, dialog, dataClosing, route);
                //     // appComponent.showOverlay = false;
                //   }, (err) => {
                //     this.badSend(err, dialog);
                //   });
                break;

              case 'claims-refund':
                // appComponent.showOverlay = true;
                // this.refundService.postClaim(json)
                //   .subscribe(res => {
                //     this.correctSend(res, dialog, dataClosing, route);
                //     // appComponent.showOverlay = false;
                //   }, (err) => {
                //     this.badSend(err, dialog);
                //   });
                break;

              case 'new-authorization':
                // appComponent.showOverlay = true;
                // this.newAuthorizationService.postClaim(json)
                //   .subscribe(res => {
                //     this.correctSend(res, dialog, dataClosing, route);
                //     // appComponent.showOverlay = false;
                //   }, (err) => {
                //     this.badSend(err, dialog);
                //   });
                break;

              case 'form':
                // appComponent.showOverlay = true;
                // this.formsService.postData(json)
                //   .subscribe(res => {
                //     this.correctSend(res, dialog, dataClosing, route);
                //     // appComponent.showOverlay = false;
                //   }, (err) => {
                //     this.badSend(err, dialog);
                //   });
                break;

              case 'life':
                // appComponent.showOverlay = true;
                if (isInvitation) {
                  // this.requestService.saveRequestData('vida', ID, json)
                  //   .subscribe(res => {
                  //     this.correctSend(res, dialog, dataClosing, route, isInvitation);
                  //     // appComponent.showOverlay = false;
                  //   }, (err) => {
                  //     this.badSend(err, dialog);
                  //   });
                } else {
                  this.lifeService.postRequest(json)
                    .subscribe(res => {
                      this.correctSend(res, dialog, dataClosing, route);
                      appComponent.showOverlay = false;
                    }, (err) => {
                      this.badSend(err, dialog);
                    });
                }
                break;

              case 'major-expenses':
                // appComponent.showOverlay = true;
                if (isInvitation) {
                  // this.requestService.saveRequestData('salud', ID, json)
                  //   .subscribe(res => {
                  //     this.correctSend(res, dialog, dataClosing, route, isInvitation);
                  //     // appComponent.showOverlay = false;
                  //   }, (err) => {
                  //     this.badSend(err, dialog);
                  //   });
                } else {
                  this.majorExpensesService.postRequest(json)
                    .subscribe(res => {
                      this.correctSend(res, dialog, dataClosing, route);
                      appComponent.showOverlay = false;
                    }, (err) => {
                      this.badSend(err, dialog);
                    });
                }
                break;

              case 'disability':
                // appComponent.showOverlay = true;
                if (isInvitation) {
                  // this.requestService.saveRequestData('disability', ID, json)
                  //   .subscribe(res => {
                  //     this.correctSend(res, dialog, dataClosing, route, isInvitation);
                  //     // appComponent.showOverlay = false;
                  //   }, (err) => {
                  //     this.badSend(err, dialog);
                  //   });
                } else {
                  this.disabilityService.postRequest(json)
                    .subscribe(res => {
                      this.correctSend(res, dialog, dataClosing, route);
                      appComponent.showOverlay = false;
                    }, (err) => {
                      this.badSend(err, dialog);
                    });
                }
                break;

              case 'dynamic-pa':
                // appComponent.showOverlay = true;
                if (isInvitation) {
                  // this.requestService.saveRequestData('disability', ID, json)
                  // 	.subscribe(res => {
                  // 		this.correctSend(res, dialog, dataClosing, route, isInvitation);
                  		// appComponent.showOverlay = false;
                  // 	}, (err) => {
                  // 		this.badSend(err, dialog);
                  // 	});
                  console.warn('ESTA ENTRANDO A INVITATION');
                } else {
                  console.log(json);
                  // this.changeService.postDynamicData(json)
                  //   .subscribe(res => {
                  //     this.correctSend(res, dialog, dataClosing, route);
                  //     // appComponent.showOverlay = false;
                  //   }, (err) => {
                  //     this.badSend(err, dialog);
                  //   });
                }
                break;

              default:
                break;
            }
          }
          break;

        case 'send':
          form.markAllAsTouched();
          form.updateValueAndValidity();
          if (result === 'true') {
            let dialog;
            // dialog = this.dialog.open(BaseDialogComponent, {
            // 	data: dataOpen,
            // 	minWidth: 385
            // });
            // this.closeDialog(dialog);
            if (!form.invalid) {
              switch (name) {
                case 'claims-reclaim':
                  // this.claimService.postClaim(json)
                  //   .subscribe(res => {
                  //     this.correctSend(res, dialog, dataClosing, route);

                  //   }, (err) => {
                  //     this.badSend(err, dialog);

                  //   });
                  break;

                case 'claims-refund':
                  if (ID) {
                    // appComponent.showOverlay = true;
                    // this.refundService.sendRefund(ID)
                    //   .subscribe(res => {
                    //     // appComponent.showOverlay = false;
                    //     this.correctSend(res, dialog, dataClosing, route);
                    //   }, (err) => {
                    //     // appComponent.showOverlay = false;
                    //     this.badSend(err, dialog);
                    //   });
                  } else {
                    // appComponent.showOverlay = true;
                    // this.refundService.postClaim(json)
                    //   .subscribe((res: any) => {
                    //     if (res.data.id) {
                    //       this.refundService.sendRefund(res.data.id)
                    //         .subscribe(response => {
                    //           // appComponent.showOverlay = false;
                    //           this.correctSend(response, dialog, dataClosing, route);
                    //         });
                    //     }
                    //   }, (err) => {
                    //     // appComponent.showOverlay = false;
                    //     this.badSend(err, dialog);
                    //   });
                  }
                  break;

                case 'new-authorization':
                  if (ID) {
                    // appComponent.showOverlay = true;
                    // this.newAuthorizationService.sendAuthorization(ID)
                    //   .subscribe(res => {
                    //     // appComponent.showOverlay = false;

                    //     this.correctSend(res, dialog, dataClosing, route);
                    //   }, (err) => {
                    //     // appComponent.showOverlay = false;
                    //     this.badSend(err, dialog);

                    //   });
                  } else {
                    // appComponent.showOverlay = true;
                    // this.newAuthorizationService.postClaim(json)
                    //   .subscribe((res: any) => {
                    //     if (res.data.id) {
                    //       this.newAuthorizationService.sendAuthorization(res.data.id)
                    //         .subscribe(response => {
                    //           // appComponent.showOverlay = false;
                    //           console.log(response);
                    //           this.correctSend(response, dialog, dataClosing, route);

                    //         });
                    //     }
                    //     // this.correctSend(res, dialog, dataClosing, route);

                    //   }, (err) => {
                    //     // appComponent.showOverlay = false;
                    //     this.badSend(err, dialog);

                    //   });
                  }
                  break;

                case 'form':
                  if (ID) {
                    // appComponent.showOverlay = true;
                    // this.formsService.sendData(ID)
                    //   .subscribe(res => {
                    //     // appComponent.showOverlay = false;

                    //     this.correctSend(res, dialog, dataClosing, route);
                    //   }, (err) => {
                    //     // appComponent.showOverlay = false;
                    //     this.badSend(err, dialog);

                    //   });
                  } else {
                    // appComponent.showOverlay = true;
                    // this.formsService.postData(json)
                    //   .subscribe((res: any) => {
                    //     if (res.data.id) {
                    //       this.formsService.sendData(res.data.id)
                    //         .subscribe(response => {
                    //           // appComponent.showOverlay = false;
                    //           console.log(response);
                    //           this.correctSend(response, dialog, dataClosing, route);

                    //         });
                    //     }
                    //     // this.correctSend(res, dialog, dataClosing, route);

                    //   }, (err) => {
                    //     // appComponent.showOverlay = false;
                    //     this.badSend(err, dialog);

                    //   });
                  }
                  break;

                case 'life':
                  if (ID) {
                    // appComponent.showOverlay = true;
                    if (isInvitation) {
                      // this.requestService.saveRequestData('vida', ID, json)
                      //   .subscribe(response => {
                      //     this.requestService.sendRequestData('vida', ID)
                      //       .subscribe(res => {
                      //         // appComponent.showOverlay = false;
                      //         this.correctSend(res, dialog, dataClosing, route, isInvitation);
                      //       }, (err) => {
                      //         // appComponent.showOverlay = false;
                      //         this.badSend(err, dialog);
                      //       });
                      //   }, (err) => {
                      //     this.badSend(err, dialog);
                      //   });

                    } else {
                      this.lifeService.sendRequest(ID)
                        .subscribe(res => {
                          appComponent.showOverlay = false;
                          this.correctSend(res, dialog, dataClosing, route);
                        }, (err) => {
                          appComponent.showOverlay = false;
                          this.badSend(err, dialog);
                        });
                    }
                  } else {
                    appComponent.showOverlay = true;
                    this.lifeService.postRequest(json)
                      .subscribe((res: any) => {
                        if (res.data.id) {
                          this.lifeService.sendRequest(res.data.id)
                            .subscribe(response => {
                              appComponent.showOverlay = false;
                              this.correctSend(response, dialog, dataClosing, route);
                            });
                        }
                      }, (err) => {
                        appComponent.showOverlay = false;
                        this.badSend(err, dialog);
                      });
                  }
                  break;

                case 'major-expenses':
                  if (ID) {
                    // appComponent.showOverlay = true;
                    if (isInvitation) {
                      // this.requestService.saveRequestData('salud', ID, json)
                      //   .subscribe(response => {
                      //     this.requestService.sendRequestData('salud', ID)
                      //       .subscribe(res => {
                      //         // appComponent.showOverlay = false;
                      //         this.correctSend(res, dialog, dataClosing, route, isInvitation);
                      //       }, (err) => {
                      //         // appComponent.showOverlay = false;
                      //         this.badSend(err, dialog);
                      //       });
                      //   }, (err) => {
                      //     this.badSend(err, dialog);
                      //   });

                    } else {
                      this.majorExpensesService.sendRequest(ID)
                        .subscribe(res => {
                          appComponent.showOverlay = false;
                          this.correctSend(res, dialog, dataClosing, route);
                        }, (err) => {
                          appComponent.showOverlay = false;
                          this.badSend(err, dialog);
                        });
                    }
                  } else {
                    appComponent.showOverlay = true;
                    this.majorExpensesService.postRequest(json)
                      .subscribe((res: any) => {
                        if (res.data.id) {
                          this.majorExpensesService.sendRequest(res.data.id)
                            .subscribe(response => {
                              appComponent.showOverlay = false;
                              this.correctSend(response, dialog, dataClosing, route);
                            });
                        }
                      }, (err) => {
                        appComponent.showOverlay = false;
                        this.badSend(err, dialog);
                      });
                  }
                  break;

                case 'disability':
                  if (ID) {
                    // appComponent.showOverlay = true;
                    if (isInvitation) {
                      // this.requestService.saveRequestData('disability', ID, json)
                      //   .subscribe(response => {
                      //     this.requestService.sendRequestData('disability', ID)
                      //       .subscribe(res => {
                      //         // appComponent.showOverlay = false;
                      //         this.correctSend(res, dialog, dataClosing, route, isInvitation);
                      //       }, (err) => {
                      //         // appComponent.showOverlay = false;
                      //         this.badSend(err, dialog);
                      //       });
                      //   }, (err) => {
                      //     this.badSend(err, dialog);
                      //   });

                    } else {
                      this.disabilityService.sendRequest(ID)
                        .subscribe(res => {
                          appComponent.showOverlay = false;
                          this.correctSend(res, dialog, dataClosing, route);
                        }, (err) => {
                          appComponent.showOverlay = false;
                          this.badSend(err, dialog);
                        });
                    }
                  } else {
                    appComponent.showOverlay = true;
                    this.disabilityService.postRequest(json)
                      .subscribe((res: any) => {
                        if (res.data.id) {
                          this.disabilityService.sendRequest(res.data.id)
                            .subscribe(response => {
                              appComponent.showOverlay = false;
                              this.correctSend(response, dialog, dataClosing, route);
                            });
                        }
                      }, (err) => {
                        appComponent.showOverlay = false;
                        this.badSend(err, dialog);
                      });
                  }
                  break;

                case 'dynamic-pa':
                  if (ID) {
                    // appComponent.showOverlay = true;
                    // this.dynamicPaService.sendRequest(ID)
                    //   .subscribe(res => {
                    //     // appComponent.showOverlay = false;

                    //     this.correctSend(res, dialog, dataClosing, route);
                    //   }, (err) => {
                    //     // appComponent.showOverlay = false;
                    //     this.badSend(err, dialog);

                    //   });
                  } else {
                    // appComponent.showOverlay = true;
                    console.log(json);
                    // this.changeService.postDynamicData(json)
                    //   .subscribe((res: any) => {
                    //     console.log(res);
                    //     if (res.data.id) {
                    //       this.dynamicPaService.sendRequest(res.data.id)
                    //         .subscribe(response => {
                    //           // appComponent.showOverlay = false;
                    //           console.log(response);
                    //           this.correctSend(response, dialog, dataClosing, route);

                    //         });
                    //     }
                    //     // this.correctSend(res, dialog, dataClosing, route);

                    //   }, (err) => {
                    //     // appComponent.showOverlay = false;
                    //     this.badSend(err, dialog);

                    //   });
                  }
                  break;


                default:
                  break;
              }

            } else {
              const invalidControls = [];
              for (const control in this.findInvalidControls(form)) {
                invalidControls.push(this.getName(this.findInvalidControls(form)[control]));
              }
              dialog = this.dialog.open(BaseDialogComponent, {
                data: this.dialogOption.getInvalidControls(invalidControls),
                minWidth: 385
              });
              this.closeDialog(dialog);
            }
          }
          break;

        default:
          break;
      }
    });
  }

  correctSend(response, dialog, dataClosing, route, isInvitation?) {
    console.log(response);
    dialog = this.dialog.open(BaseDialogComponent, {
      data: dataClosing,
      minWidth: 385
    });
    this.closeDialog(dialog);

    if (!isInvitation) {
      this.navigateToMenu(route);
    }
  }

  badSend(err, dialog?) {
    console.log(err);

    const dialogRef = this.dialog.open(BaseDialogComponent, {
      data: this.errorServer,
      minWidth: 385
    });
    this.closeDialog(dialogRef);
  }

  closeDialog(dialog) {
    setTimeout(() => {
      dialog.close();

    }, 7000);
  }

  navigateToMenu(route) {
    this.route.navigateByUrl(route);
  }

  directSendRequest(id: number, type: string, title: string, appComponent?: any): Observable<boolean> {
    const dialogRef = this.dialog.open(BaseDialogComponent, {
      data: this.dialogOption.sendForm(title),
      minWidth: 385,
    });
    let deleted: boolean;
    const subject = new Subject<boolean>();
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'true') {
        appComponent.showOverlay = true;
        this.http.post(`${environment.apiUrl}/api/${type}/confirm/${id}`, id)
          .subscribe(response => {
            appComponent.showOverlay = false;
            console.log(response);

            const dialog = this.dialog.open(BaseDialogComponent, {
              data: this.dialogOption.confirmedForm(title),
              minWidth: 385
            });
            this.closeDialog(dialog);
            deleted = true;
            subject.next(deleted);
          }, (err) => {
            this.badSend(err);

          });
      }
    });
    return subject.asObservable();
  }

  deleteRequest(id: number, type: string, title: string, appComponent?: any): Observable<boolean> {
    const dialogRef = this.dialog.open(BaseDialogComponent, {
      data: this.dialogOption.deleteConfirm(title),
      minWidth: 385,
    });
    let deleted: boolean;
    const subject = new Subject<boolean>();
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'true') {
        appComponent.showOverlay = true;

        this.http.delete(`${environment.apiUrl}/api/${type}/${id}`)
          .subscribe(response => {
            console.log(response);
            appComponent.showOverlay = false;

            const dialog = this.dialog.open(BaseDialogComponent, {
              data: this.dialogOption.deleteConfirmed(title),
              minWidth: 385
            });
            this.closeDialog(dialog);
            deleted = true;
            subject.next(deleted);
          }, (err) => {
            this.badSend(err);
          });
      }
    });
    return subject.asObservable();
  }

  findInvalidControls(_input: AbstractControl, _invalidControls?: AbstractControl[]): AbstractControl[] {
    if (!_invalidControls) { _invalidControls = []; }
    if (_input instanceof FormControl) {
      if (_input.invalid) { _invalidControls.push(_input); }
      return _invalidControls;
    }

    if (!(_input instanceof FormArray) && !(_input instanceof FormGroup)) { return _invalidControls; }

    const controls = _input.controls;

    for (const name in controls) {
      const control = controls[name];
      if (control.invalid) { _invalidControls.push(control); }

    }

    return _invalidControls;
  }

  getName(control: AbstractControl): string | null {
    const group = control.parent as FormGroup;

    if (!group) {
      return null;
    }

    let name: string;

    Object.keys(group.controls).forEach(key => {
      const childControl = group.get(key);

      if (childControl !== control) {
        return;
      }

      name = key;
    });

    return name;
  }


}
