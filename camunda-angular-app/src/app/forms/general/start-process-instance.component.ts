import { CamundaRestService } from '../../camunda-rest.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

export class StartProcessInstanceComponent implements OnInit {
  model
  submitted
  route: ActivatedRoute
  camundaRestService: CamundaRestService

  constructor(route: ActivatedRoute,
    camundaRestService: CamundaRestService
    ) {
      this.route = route;
      this.camundaRestService = camundaRestService;
  }

  ngOnInit() {}

  onSubmit() {
    this.route.params.subscribe(params => {
      const processDefinitionKey = params['processdefinitionkey'];
      const variables = this.generateVariablesFromFormFields();
      this.camundaRestService.postProcessInstance(processDefinitionKey, variables).subscribe();
      this.submitted = true;
    });
  }
  
  generateVariablesFromFormFields() {
    const variables = {
      variables: { }
    };
    Object.keys(this.model).forEach((field) => {
      variables.variables[field] = {
        value: this.model[field]
      };
    });

    return variables;
  }
}
