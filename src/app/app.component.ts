import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router, RouterEvent, NavigationEnd, NavigationCancel, NavigationError, ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuthenticated = false;

  public showOverlay = true;

  constructor(public oidcSecurityService: OidcSecurityService, private router: Router,) {

    router.events.subscribe((event: any) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
      this.isAuthenticated = isAuthenticated;
      console.warn('authenticated: ', isAuthenticated);
      console.warn('token: ', idToken);

      if(!isAuthenticated)
      {
        this.oidcSecurityService.authorize();
      }
      /*...*/
    });

    // setTimeout(() => {
    //   this.showOverlay = true;
    //   console.log(this.showOverlay);
    // }, 10000);
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff();
  }

    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event: RouterEvent): void {
      if (event instanceof ChildActivationStart) {
        setTimeout(() => {
          this.showOverlay = true;
        });
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.showOverlay = false;
        });
      }
  
      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        setTimeout(() => {
          this.showOverlay = false;
        });
      }
      if (event instanceof NavigationError) {
        setTimeout(() => {
          this.showOverlay = false;
        });
      }
    }
}