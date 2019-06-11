import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { CommonUtilsService } from 'src/app/services/common-utils.service';
import { Subscription } from 'rxjs';

declare var moment: any;

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.css']
})
export class PostReviewComponent implements OnInit {

  reviewForm: FormGroup = this.formBuilder.group({
    reviewTitle: ['', [Validators.required]],
    starRating: ['', [Validators.required, Validators.min(1)]],
    reviewNotes: ['']
  });

  starList: boolean[] = [true, true, true, true, true];

  private sub: Subscription = new Subscription();

  private caregiverId: string;

  private loggedInUser: any;

  postReviewSuccess: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private commonUtilsService: CommonUtilsService) {
    this.sub.add(this.commonUtilsService.signedInUser$.subscribe(res => {
      this.loggedInUser = res
    }, err => {
      // error handling
    }));
  }

  ngOnInit() {
    this.sub.add(this.commonUtilsService.reviewCaregiverId$.subscribe(res => {
      this.caregiverId = res;
    }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public setStar(data: number) {
    this.starList = [true, true, true, true, true];
    for (var i = 0; i < data + 1; i++) {
      this.starList[i] = false;
    }
    this.reviewForm.patchValue({
      starRating: data + 1
    });
  }

  public submitReview() {
    this.postReviewSuccess = false;
    let review: any = {
      reviewerID: this.loggedInUser['_id'],
      revieweeID: this.caregiverId,
      reviewDate: moment().format('MM/DD/YYYY hh:mm A Z')
    }

    review = Object.assign({}, review, this.reviewForm.value);

    this.userService.PostNewReview(review).then(res => {
      this.postReviewSuccess = true;
    }, err => {
      alert(err);
    })
  }

}
