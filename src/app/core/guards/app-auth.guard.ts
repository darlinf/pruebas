import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AppAuthGuard implements CanActivate {

  constructor(public oidcSecurityService: OidcSecurityService){
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
      /*...*/
    });    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.oidcSecurityService.revokeAccessToken().subscribe((result) => console.log(result));
      
      var isAuthenticated = this.oidcSecurityService.isAuthenticated();
      
      if(!(isAuthenticated))
      {
        alert('user is not authenticated');
        // this.oidcSecurityService.authorize();
      }

      // if (this.oidcSecurityService.moduleSetup) {
      //       this.onModuleSetup();
      // }

      return (isAuthenticated);
  }
  
}
