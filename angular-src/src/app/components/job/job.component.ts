import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { CommonUtilsService } from 'src/app/services/common-utils.service';
import { Subscription } from 'rxjs';
import { JobType, JobStatus } from 'src/app/shared/models/enums';

declare var $: any;
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  private subscription: Subscription = new Subscription();

  private loggedInUser: any;

  jobs$: any;

  fetchError: boolean;

  constructor(private jobService: JobService, private commonUtilsService: CommonUtilsService) {
    this.subscription.add(this.commonUtilsService.signedInUser$.subscribe(res => {
      this.loggedInUser = res
    }, err => {
      // error handling
    }));
   }

  ngOnInit() {
    this.fetchData();
  }

  public fetchData() {
    this.jobService.getAllJobsForUser(this.loggedInUser['_id']).then(res => {
      if(res.success) {
        this.jobs$ = res.data;
      }
    }, err => {
      // error handling
      console.log(err);
      this.fetchError = true;
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  public getJobType(type: number) {
    return JobType[type];
  }

  public getJobStatus(type: number) {
    return JobStatus[type];
  }

  public writeReview(job: any) {
    this.commonUtilsService.setReviewCaregiverId(job['createdFor']);
    this.showNewReviewModal();
  }

  private showNewReviewModal() {
    var self = this;
    $('#openNewReviewModal').modal();
    $('#openNewReviewModal').on('hidden.bs.modal', function (e) {
      self.commonUtilsService.setReviewCaregiverId(undefined);
    })
  }

}
