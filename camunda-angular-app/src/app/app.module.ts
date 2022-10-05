import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule, NgModuleFactory } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { SuiModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CamundaRestService } from './camunda-rest.service';
import { ProcesslistComponent } from './processlist/processlist.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { HomeComponent } from './home/home.component';
import { StartProcessComponent } from './start-process/start-process.component';
import { GenericForm } from './generic-form.component';
import { MyAddonModule } from './forms/myprocess/myAddon.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { initializer } from '../utils/app-inits';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { DynamicFormStartComponent } from './dynamic-form-start/dynamic-form-start.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ScolariteService } from './scolarite.service';


@NgModule({
  declarations: [
    AppComponent,
    ProcesslistComponent,
    TasklistComponent,
    HomeComponent,
    StartProcessComponent,
    GenericForm,
    AppComponent,
    HomeComponent,
    DynamicFormComponent,
    DynamicFormStartComponent, 
    DynamicFormQuestionComponent,
    AccessDeniedComponent,
    EtudiantComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SuiModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MyAddonModule,
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule,
  ],
  entryComponents: [
    GenericForm
  ],
  providers: [
    CamundaRestService,
    ScolariteService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
