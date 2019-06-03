import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-post-open-job',
  templateUrl: './post-open-job.component.html',
  styleUrls: ['./post-open-job.component.css']
})
export class PostOpenJobComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#startDate').datetimepicker({
      sideBySide: true,
      locale: 'en'
    });
    $('#endDate').datetimepicker({
      sideBySide: true,
      locale: 'en'
    });
  }

  public postOpenJob() {

  }

}
