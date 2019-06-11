import { Component, OnInit } from '@angular/core';
import { CommonUtilsService } from 'src/app/services/common-utils.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from "@angular/router";
import { User } from 'src/app/shared/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MOMENT } from 'angular-calendar';
import { JobService } from 'src/app/services/job.service';

//JQUERY
declare var $: any;
declare var moment: any;

@Component({
  selector: 'app-schedule-caregiver',
  templateUrl: './schedule-caregiver.component.html',
  styleUrls: ['./schedule-caregiver.component.css']
})
export class ScheduleCaregiverComponent implements OnInit {

  private subscription: Subscription = new Subscription();
  caregiver: any;
  caregiverExp: any[];
  user: any;
  reviews$: any;
  fetchError: boolean;
  caregiverReviews: [any];
  scheduleForm: FormGroup;
  postSuccess: boolean;
  private loggedInUser: any;

  constructor(
    private commonUtilsService: CommonUtilsService,
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private jobService:JobService
  ) {}

  get jobName() {
    return this.scheduleForm.get('jobName');
  }
  get jobStartTime() {
    return this.scheduleForm.get('jobStartTime');
  }
  get jobEndTime() {
    return this.scheduleForm.get('jobEndTime');
  }
  get jobNotes() {
    return this.scheduleForm.get('jobNotes');
  }

  ngOnInit() {
    this.subscription.add(this.commonUtilsService.scheduleCaregiver$.subscribe(res => {
      console.log(res);
      this.caregiver = res['caregiver'];
      this.reviews$ = res['reviews'];
      this.caregiverExp = this.caregiver['profiles'].filter(e => {
        if(e['userType'] === 1)
          return e;
      });
    }));

    /**
     * Creating form for the user to fill out
     * if more the job form requires more parts 
     * add those here.
     */
    this.scheduleForm = this.formBuilder.group({
      jobName:['', [Validators.required]],
      jobStartTime: ['', [Validators.required]],
      jobEndTime: ['', [Validators.required]],
      jobNotes: ['']
    });

    this.subscription.add(this.commonUtilsService.signedInUser$.subscribe( res => {
      this.loggedInUser = res;
    }, err=> {
      //Error handling for Logged In User
    }));

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
        self.scheduleForm.patchValue({
          jobStartTime: _d
        });
      }
    });
    $('#endDate').on("change.datetimepicker", function (e) {
      if(e.date) {
        let _d = e.date.format('MM/DD/YYYY hh:mm A Z')
        self.scheduleForm.patchValue({
          jobEndTime: _d
        });
      }
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
    this.scheduleForm.reset();
    this.postSuccess = false;
  }

  public getCaregiverExp() {
    return this.caregiverExp;
  }

  public getStarRatings() {
    let _arr: [] = this.getReviewsForId().map(rev => {
      return rev["starRating"];
    });
    let totalRating = _arr.reduce((a, b) => a + b, 0);
    let avgRating = Math.ceil(totalRating / 5);
    return this.getStartRatingsArray(avgRating);
  }

  public getStartRatingsArray(rating: number) {
    let finArr = [false, false, false, false, false];
    for (let i = 0; i < rating; i++) {
      finArr[i] = true;
    }
    return finArr;
  }

  public getReviewsForId() {
    return this.reviews$;
  }

  public showDetailedReviews(id: string) {
    this.caregiverReviews = this.getReviewsForId();
  }


  public scheduleJob() {
    this.postSuccess = false;
    let job: any = {
      userId: this.loggedInUser['_id'],
      createdAt: moment().format('MM/DD/YYYY hh:mm A Z')
    }
    job = Object.assign({}, job, this.scheduleForm.value)
    this.jobService.postScheduleJob(job).then(res => {
      if(res.success) {
        this.postSuccess = true;
      }
    }, err => {
      console.log(err);
    });
  }

}
