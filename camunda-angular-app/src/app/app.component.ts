import { Component } from '@angular/core';
import { QuestionService } from './question.service';
import { KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService]
})
export class AppComponent {
  title = 'Camunda Angular Tasklist';
  public menu : number = 1;
  constructor(private keycloakService: KeycloakService) {}
  
  logout() {
    this.keycloakService.logout();
  }


  menuChoice(choice) {
    this.menu = choice;
  }

}
