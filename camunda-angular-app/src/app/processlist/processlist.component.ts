import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CamundaRestService } from '../camunda-rest.service'
import { QuestionBase } from '../question-base';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-processlist',
  templateUrl: './processlist.component.html',
  styleUrls: ['./processlist.component.css']
})
export class ProcesslistComponent implements OnInit {
  private processDefinitions;
  public key;
  public formKey;
  public form;
  questions$: Observable<QuestionBase<any>[]> = null;

  constructor(private camundaRestService: CamundaRestService,
    private route: ActivatedRoute,
    private router: Router,
    public service: QuestionService) { }

  ngOnInit() {
    this.getProcessDefinitions();
    if (this.route.params != null) {
      this.route.params.subscribe(params => {
        if (params['id'] != null) {
          
          this.key = params['id'];
          this.camundaRestService.getVariablesForProcess(this.key).subscribe(
            data => { 
              this.form = data;
              this.questions$ = this.service.getQuestions(this.form);
              console.dir(this.questions$);
            }
          );
        } 
      });

    }
  }

  getProcessDefinitions(): void {
    this.camundaRestService
      .getProcessDefinitions()
      .subscribe(processDefinitions =>  { this.processDefinitions = processDefinitions;
        console.dir(this.processDefinitions);});
  }

  getFormKey(): void {
    this.camundaRestService
      .getTaskFormKey(this.key)
      .subscribe(formKey => { 
        this.formKey = formKey.key });
  }

}
