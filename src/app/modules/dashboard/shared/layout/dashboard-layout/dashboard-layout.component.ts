import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/internal/Subscription';
import { MatDialog } from '@angular/material/dialog';
import { BaseDialogComponent } from 'src/app/global-shared/components/base-dialog/base-dialog.component';
import { DialogOptionService } from 'src/app/global-shared/global-services/dialog-option.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { RequestsServiceService } from 'src/app/global-shared/global-services/requests-service.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  activeRoute = '';
  watchRouter: Subscription;

  nameLoggedUserinfo;
  emailLoggedUserinfo;

  private mobileQueryListener: () => void;

  constructor(
    private media: MediaMatcher,
    private router: Router,
    private location: Location,
    private dialog: MatDialog,
    private dialogOption: DialogOptionService,
    private changeDetectorRef: ChangeDetectorRef,
    private requestsService: RequestsServiceService,
    private oidcSecurityService: OidcSecurityService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this.mobileQueryListener);

    this.watchRouter = router.events.subscribe((url: any) => {
      if (url.url !== undefined && url.url) {
        if (this.navigationInterceptor(url) !== undefined) {
          this.activeRoute = this.navigationInterceptor(url);
        }
      }
    });
  }

  ngOnInit(): void {
    this.loggedUserinfo();
  }

  loggedUserinfo() {
    this.nameLoggedUserinfo = this.requestsService.decodedToken.name;
    this.emailLoggedUserinfo = this.requestsService.decodedToken.email;
  }

  navigationInterceptor(event: RouterEvent): string {
    if (event instanceof NavigationEnd) {
      return event.url;
    }
  }

  navigateBack() {
    this.location.back();
  }

  ngOnDestroy() {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this.mobileQueryListener);

    this.watchRouter.unsubscribe();
  }

  logOut() {
    const Dialog = this.dialog.open(BaseDialogComponent, {
      data: this.dialogOption.logoutConfirmation,
      minWidth: 385,
    });
    // tslint:disable-next-line: deprecation
    Dialog.afterClosed().subscribe((result) => {
      if (result === 'true') {
        this.oidcSecurityService.logoff();
      }
    });
  }
}
