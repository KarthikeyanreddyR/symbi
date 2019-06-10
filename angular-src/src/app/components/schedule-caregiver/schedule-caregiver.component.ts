import { Component, OnInit } from '@angular/core';
import { CommonUtilsService } from 'src/app/services/common-utils.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from "@angular/router";
import { User } from 'src/app/shared/models/user';


@Component({
  selector: 'app-schedule-caregiver',
  templateUrl: './schedule-caregiver.component.html',
  styleUrls: ['./schedule-caregiver.component.css']
})
export class ScheduleCaregiverComponent implements OnInit {

  private subscription: Subscription = new Subscription();
  caregiver$: any;
  user$: any;
  reviews$: any;
  fetchError: boolean;
  userReviews$: [any];

  constructor(
    private commonUtilsService: CommonUtilsService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription.add(this.commonUtilsService.scheduleCaregiver$.subscribe(res => {
      console.log(res);
      this.caregiver$ = res;
    }));
    this.LoadData();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  public LoadData(): void {
    this.fetchError = false;
    this.userService.GetAllCaregiversWithReviewData().subscribe(
      res => {
        console.log(res);
        if (res.success) {
          this.user$ = res.data["users"];
          this.reviews$ = res.data["reviews"];
        } else {
          this.user$ = [];
          this.reviews$ = [];
        }
      },
      err => {
        this.fetchError = true;
      }
    );
  }

  public getStarRatings(id: string) {
    let _arr: [] = this.getReviewsForId(id).map(rev => {
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

  public getReviewsForId(id: string) {
    return this.reviews$.filter(rev => {
      return rev["revieweeID"] == id;
    });
  }

  public showDetailedReviews(id: string) {
    this.userReviews$ = this.getReviewsForId(id);
  }

  public scheduleCaregiver(user: any) {
    this.commonUtilsService.setCaregiver(user);
    this.router.navigate(["/caregivers/schedule"]);
  }

}
