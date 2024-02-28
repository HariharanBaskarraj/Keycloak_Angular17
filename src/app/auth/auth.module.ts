import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from './keycloak-initializer';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
    AuthGuard,
    AuthService
  ]
})
export class AuthModule { }
