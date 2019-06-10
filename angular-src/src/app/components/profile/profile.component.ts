import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/services/user.service';
import { Address } from 'src/app/shared/models/address';
import { CommonUtilsService } from 'src/app/services/common-utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private activeTab = 0; //Currently active tab
  //TODO
  user: User;
  constructor(private commonUtilsService: CommonUtilsService) {
  }

  ngOnInit() {
    this.commonUtilsService.signedInUser$.subscribe(res => {
      this.user = res;
    })

  }
}
