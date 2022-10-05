import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CamundaRestService } from '../../camunda-rest.service';
import { StartProcessInstanceComponent } from '../general/start-process-instance.component'
import { MyProcessData } from '../../schemas/MyProcessData';

@Component({
  selector: 'startNewProcess',
  templateUrl: './startNewProcess.component.html',
  styleUrls: []
})
export class startNewProcessComponent extends StartProcessInstanceComponent implements OnInit {
  submitted:boolean = false;
  model = new MyProcessData('','',false);
  
  constructor(route: ActivatedRoute,
    camundaRestService: CamundaRestService,) {
    super(route, camundaRestService);
  }

  ngOnInit() {}

}
