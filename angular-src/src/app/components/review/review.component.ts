import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  
 

  Reviews = []
  
  constructor(private formBuilder: FormBuilder,private userservice: UserService) { }
  
  ngOnInit() {
  this.userservice.GetAllReviewsByUser("5ce3581d5fba742e68b35972").subscribe(res => {
    console.log(res);
    this.Reviews = res.data;
   
  },
  err => {
    // error handling
  },
  () => {

  })
}
    
  }


