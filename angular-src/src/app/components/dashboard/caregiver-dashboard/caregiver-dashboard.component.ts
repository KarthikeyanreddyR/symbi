import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caregiver-dashboard',
  templateUrl: './caregiver-dashboard.component.html',
  styleUrls: ['./caregiver-dashboard.component.css']
})
export class CaregiverDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  viewDate: Date = new Date();
  events = [];

}
