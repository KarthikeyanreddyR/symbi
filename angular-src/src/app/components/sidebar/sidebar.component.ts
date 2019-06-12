import { Component, OnInit } from '@angular/core';
import { CommonUtilsService } from 'src/app/services/common-utils.service';
import { UserType } from 'src/app/shared/models/enums';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  loggedInUserType: UserType;

  constructor(private commonUtilsService: CommonUtilsService) { }

  ngOnInit() {
    this.commonUtilsService.signedInUserType$.subscribe((res: UserType) => {
      this.loggedInUserType = res
    }, err => {
      // error handling
    })
  }

}
