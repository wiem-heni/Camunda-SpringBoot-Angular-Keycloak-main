import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from 'protractor';
import { CamundaRestService } from '../camunda-rest.service';
import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';
import { MyProcessData } from '../schemas/MyProcessData';



@Component({
  selector: 'app-dynamic-form-start',
  templateUrl: './dynamic-form-start.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormStartComponent implements OnInit {

  route: ActivatedRoute
  camundaRestService: CamundaRestService
  @Input() questions: QuestionBase<string>[] | null = [];
  @Input() key;




  form: FormGroup = null;
  payLoad = '';
  variables = null;
  submitted:boolean = false;
  model = new MyProcessData('','', false);

  constructor(private qcs: QuestionControlService,
    public router: Router,
    route: ActivatedRoute,
    camundaRestService: CamundaRestService) {
      this.route = route;
      this.camundaRestService = camundaRestService;
    }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);

  }

  onSubmit() {
    this.payLoad = this.form.getRawValue();
    this.route.params.subscribe(params => {
      const key = params['id'];
      const variables = this.generateVariablesFromFormFields();
      this.camundaRestService.postStartProcess(key, this.variables).subscribe(
        data => {
          this.router.navigate(["/tasklist"]);
        }
      );
      this.submitted = true;
      
        
    });
  }
  loadExistingVariables() {
    this.camundaRestService.getVariablesForProcess(this.key).subscribe((result) => {
      this.generateModelFromVariables(result);
    });
  }
  generateModelFromVariables(variables) {
    Object.keys(variables).forEach((variableName) => {
      this.model[variableName] = variables[variableName].value;
    });
  }

  generateVariablesFromFormFields() {
    this.variables = {
      variables: { }
    };
    Object.keys(JSON.stringify(this.payLoad)).forEach((field) => {
      this.variables.variables[field] = {
        value: this.model[field]
      };
    });
  }



}

