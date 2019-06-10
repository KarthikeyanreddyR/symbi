import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from 'src/app/services/job.service';
import { CommonUtilsService } from 'src/app/services/common-utils.service';
import { Subscription } from 'rxjs';

// Initialize JQuery
declare var $: any;

@Component({
  selector: 'app-post-open-job',
  templateUrl: './post-open-job.component.html',
  styleUrls: ['./post-open-job.component.css']
})
export class PostOpenJobComponent implements OnInit {

  private subscription: Subscription = new Subscription();

  private loggedInUser: any;
  postSuccess: boolean;

  constructor(private formBuilder: FormBuilder, private jobService: JobService, private commonUtilsService: CommonUtilsService) {
    this.subscription.add(this.commonUtilsService.signedInUser$.subscribe(res => {
      this.loggedInUser = res
    }, err => {
      // error handling
    }));
   }

  postOpenJobForm: FormGroup = this.formBuilder.group({
    jobName: ['', [Validators.required]],
    jobStartTime: ['', [Validators.required]],
    jobEndTime: ['', [Validators.required]],
    jobNotes: ['']
  });

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
  }

  public postOpenJob() {
    this.postSuccess = false;
    console.log(this.postOpenJobForm.value);

    let job: any = {
      userId: this.loggedInUser['_id'],
      createdAt: new Date().toDateString()
    }

    job = Object.assign({}, job, this.postOpenJobForm.value)

    console.log(job);

    this.jobService.postOpenJob(job).then(res => {
      console.log(res);
      if(res.success) {
        this.postSuccess = true;
      }
    }, err => {
      console.log(err);
    });
  }

}
