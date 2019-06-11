import { Component, OnInit, Input } from "@angular/core";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { CommonUtilsService } from 'src/app/services/common-utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.css"]
})
export class ReviewComponent implements OnInit {
  reviews$: any = [];

  private subscription: Subscription = new Subscription();

  private loggedInUser: any;

  constructor(private userservice: UserService, private commonUtilsService: CommonUtilsService) {
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
    this.subscription.add(this.userservice.GetAllReviewsByUser(this.loggedInUser['_id']).subscribe(
      res => {
        this.reviews$ = res.data;
      },
      err => {
        // error handling
        console.log(err);
      },
      () => {}
    ));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  public getStartRatingsArray(rating: number) {
    let finArr = [false, false, false, false, false];
    for (let i = 0; i < rating; i++) {
      finArr[i] = true;
    }
    return finArr;
  }

  public deleteReview(review:any){
    this.subscription.add(this.userservice.DeleteReviewForUserByReviewId(this.loggedInUser['_id'], review['_id']).subscribe(
      res => {
        if(res.success) {
          this.fetchData();
        } else {
          // error during deletion
        }
      },
      err => {
        // error handling
        console.log(err);
      },
      () => {}
    ));

  }
}


