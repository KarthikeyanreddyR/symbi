import { Component, OnInit,Input } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.css']
})
export class PostReviewComponent implements OnInit {

  reviewForm: FormGroup = this.formBuilder.group({
    reviewerId: ['', [Validators.required]],
    revieweeId: ['', [Validators.required]],
    reviewDate: [''],
    starRating: ['', [Validators.required]],
    reviewNotes: ['']
  });

  starList: boolean[] = [true,true,true,true,true];       // create a list which contains status of 5 stars
  rating:number; 

  setStar(data:any){
    this.rating=data+1;                               
    for(var i=0;i<=4;i++){  
      if(i<=data){  
        this.starList[i]=false;  
      }  
      else{  
        this.starList[i]=true;  
      }  
  }  
}

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
