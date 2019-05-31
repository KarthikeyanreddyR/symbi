import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private activeTab: number; //Current active tab
  private user: User;
  constructor(private userService: UserService) {
    this.activeTab = 0;
    this.userService.getUserById('5ce3581d5fba742e68b35971').subscribe(res => {
      this.user = <User>res;
    },
    err => {
      alert('error when retreiving user!!')
    },
    () => {

    })
  }

  ngOnInit() {
   
  }


  changeTab(tabNum: number) {
    
  }

}
