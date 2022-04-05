import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
    imports: [AuthModule.forRoot({
        config: {
              triggerAuthorizationResultEvent: true,
              authority: 'https://wwsdevfrontenddentity.azurewebsites.net',
              postLoginRoute:'/dashboard',
              redirectUrl: window.location.origin,
              postLogoutRedirectUri: window.location.origin,
              clientId: 'WWSActiveDirectory',
              scope: 'openid profile email WWSubscriptionPortalBackend_Api', // 'openid profile offline_access ' + your scopes
              responseType: 'code',
              //logLevel: LogLevel.Debug,
              historyCleanupOff: true,
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30 //,
              //secureRoutes: ['https://wwsdevapiapp.azurewebsites.net/solicitudes']
          }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
