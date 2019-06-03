import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public openJob() {
    $("#openjobModal").modal();

  }

}
