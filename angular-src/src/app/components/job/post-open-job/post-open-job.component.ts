import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from 'src/app/services/job.service';
import { CommonUtilsService } from 'src/app/services/common-utils.service';
import { Subscription } from 'rxjs';

// Initialize JQuery
declare var $: any;

declare var moment: any;

@Component({
  selector: 'app-post-open-job',
  templateUrl: './post-open-job.component.html',
  styleUrls: ['./post-open-job.component.css']
})
export class PostOpenJobComponent implements OnInit {

  private subscription: Subscription = new Subscription();
  postOpenJobForm: FormGroup;
  private loggedInUser: any;
  postSuccess: boolean;

  constructor(private formBuilder: FormBuilder, private jobService: JobService, private commonUtilsService: CommonUtilsService) {
    this.postOpenJobForm  = this.formBuilder.group({
      jobName: ['', [Validators.required]],
      jobStartTime: ['', [Validators.required]],
      jobEndTime: ['', [Validators.required]],
      jobNotes: ['']
    });
    this.subscription.add(this.commonUtilsService.signedInUser$.subscribe(res => {
      this.loggedInUser = res
    }, err => {
      // error handling
    }));
   }

  get jobName() {
    return this.postOpenJobForm.get('jobName');
  }
  get jobStartTime() {
    return this.postOpenJobForm.get('jobStartTime');
  }
  get jobEndTime() {
    return this.postOpenJobForm.get('jobEndTime');
  }
  get jobNotes() {
    return this.postOpenJobForm.get('jobNotes');
  }

  ngOnInit() {
    let self = this;
    $('#startDate').datetimepicker({
      sideBySide: true,
      locale: 'en',
      format: 'MM/DD/YYYY hh:mm A Z'
    });
    $('#endDate').datetimepicker({
      sideBySide: true,
      locale: 'en',
      format: 'MM/DD/YYYY hh:mm A Z'
    });
    $('#startDate').on("change.datetimepicker", function (e) {
      if(e.date) {
        let _d = e.date.format('MM/DD/YYYY hh:mm A Z')
        self.postOpenJobForm.patchValue({
          jobStartTime: _d
        });
      }
    });
    $('#endDate').on("change.datetimepicker", function (e) {
      if(e.date) {
        let _d = e.date.format('MM/DD/YYYY hh:mm A Z')
        self.postOpenJobForm.patchValue({
          jobEndTime: _d
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.postOpenJobForm.reset();
    this.postSuccess = false;
  }

  public postOpenJob() {
    this.postSuccess = false;
    let job: any = {
      userId: this.loggedInUser['_id'],
      createdAt: moment().format('MM/DD/YYYY hh:mm A Z')
    }
    job = Object.assign({}, job, this.postOpenJobForm.value)
    this.jobService.postOpenJob(job).then(res => {
      if(res.success) {
        this.postSuccess = true;
      }
    }, err => {
      console.log(err);
    });
  }

}
