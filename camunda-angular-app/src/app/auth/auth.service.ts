import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class AuthService {
  constructor(private keycloakService: KeycloakService) {}

  getUserName(): string {
    return this.keycloakService.getUsername();
  }
  logout(): void {
    this.keycloakService.logout();
  }
  getLoggedUser(): any {
    console.log(this.keycloakService.getKeycloakInstance().idTokenParsed);
    return this.keycloakService.getKeycloakInstance().idTokenParsed;
  }
}
