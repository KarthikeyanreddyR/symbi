import { Component, OnInit, Input } from "@angular/core";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from "@angular/forms";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.css"]
})
export class ReviewComponent implements OnInit {
  reviews$: any = [];

  constructor(private userservice: UserService) {}

  ngOnInit() {
    this.userservice.GetAllReviewsByUser("5ce3581d5fba742e68b35972").subscribe(
      res => {
        console.log(res);
        this.reviews$ = res.data;
      },
      err => {
        // error handling
        console.log(err);
      },
      () => {}
    );
  }

  public getStartRatingsArray(rating: number) {
    let finArr = [false, false, false, false, false];
    for (let i = 0; i < rating; i++) {
      finArr[i] = true;
    }
    return finArr;
  }
}
