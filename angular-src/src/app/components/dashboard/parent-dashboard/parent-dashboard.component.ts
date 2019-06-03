import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/shared/models/jobs/job';
import { JobType } from 'src/app/shared/models/enums';
import { JobService } from 'src/app/services/job.service';


  import { from } from 'rxjs';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.css']
})
export class ParentDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
