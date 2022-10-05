import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from 'protractor';
import { CamundaRestService } from '../camunda-rest.service';
import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';
import { MyProcessData } from '../schemas/MyProcessData';



@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  route: ActivatedRoute
  camundaRestService: CamundaRestService
  @Input() questions: QuestionBase<string>[] | null = [];
  @Input() taskId;




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
      const taskId = params['id'];
      
      this.generateVariablesFromFormFields();
      //this.loadExistingVariables(taskId);
      this.camundaRestService.postCompleteTask(taskId, JSON.stringify(this.variables)).subscribe(
        data => {
          this.router.navigate(["/tasklist"]);
        }
      );
      this.submitted = true;
      
        
    });
  }

  loadExistingVariables(taskId: String) {
    this.camundaRestService.getVariablesForTask(taskId).subscribe((result) => {
      this.generateModelFromVariables(result);
    });
  }

  generateModelFromVariables(variables) {
    Object.keys(variables).forEach((variableName) => {
      console.log(variables[variableName].value.type);
      this.model[variableName] = variables[variableName].value;
    });
  }

  generateVariablesFromFormFields() {
    this.variables = {
      variables: { }
    };
    console.log(this.payLoad);
    Object.keys(this.payLoad).forEach((field) => {
      console.log(field);
      this.variables.variables[field] = {
        value: this.payLoad[field],
        "type": "String",
        "valueInfo": {}
      };
    });
    console.dir(JSON.stringify(this.variables));
  }



}

