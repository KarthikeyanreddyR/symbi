import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-caregiver',
  templateUrl: './search-caregiver.component.html',
  styleUrls: ['./search-caregiver.component.css']
})
export class SearchCaregiverComponent implements OnInit {

  constructor( private userService: UserService) { }

  user$: any;
  reviews$: any;

  fetchError: boolean;

  ngOnInit() {
    this.LoadData();
  }

  public LoadData(): void {
    this.fetchError = false;
    this.userService.GetAllCaregiversWithReviewData().subscribe(res => {
      console.log(res);
      if(res.success) {
        this.user$ = res.data['users'];
        this.reviews$ = res.data['reviews'];
      } else {
        this.user$ = [];
        this.reviews$ = [];
      }
    },
    err => {
      this.fetchError = true;
    });
  }

}
