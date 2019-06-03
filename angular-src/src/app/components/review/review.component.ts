import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  
  reviewForm: FormGroup = this.formBuilder.group({
    reviewerId: ['', [Validators.required]],
    revieweeId: ['', [Validators.required]],
    reviewDate: [''],
    starRating: ['', [Validators.required]],
    reviewNotes: ['']
  });

  date: string =  new Date().toDateString();

  //title = 'Star Rating';  
  starList: boolean[] = [true,true,true,true,true];       // create a list which contains status of 5 stars
  rating:number;  
  //Create a function which receives the value counting of stars click, 
  //and according to that value we do change the value of that star in list.
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
