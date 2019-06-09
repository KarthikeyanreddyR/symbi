import { Component, OnInit } from '@angular/core';
import { CommonUtilsService } from 'src/app/services/common-utils.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarCheck : boolean;
  
  constructor(private userService: UserService, private commonUtilsService: CommonUtilsService) { }

  logOut() {
    this.commonUtilsService.changeSignedInUser(null);
    this.userService.logoutUser().subscribe();
  }

  ngOnInit() {
    this.commonUtilsService.signedInUser$.subscribe(res => {
      if(res == null) {
        this.navbarCheck = false;

      } else {
        this.navbarCheck = true;
      }
    })
  }

}
