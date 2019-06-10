import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CommonUtilsService } from 'src/app/services/common-utils.service';

declare var $: any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private commonUtilsService: CommonUtilsService) { }

  ngOnInit() {
    this.userService.GetSignedInUser().then(res => {
      if (res.success) {
        this.commonUtilsService.changeSignedInUser(res.data);
      } else {
        this.commonUtilsService.changeSignedInUser(null);
      }
      this.showLandingPage();
    }, err => {
      if (err.status == 404) {
        this.router.navigate(['/unauthorized']);
      }
      this.commonUtilsService.changeSignedInUser(null);
    })
  }

  ngOnDestroy(): void {
    this.hideLandingPage();
  }

  public openDashboard(userType: number) {
    if (userType === 0) {
      this.router.navigate(['/dashboard/parent']);
    } else if (userType === 1) {
      this.router.navigate(['/dashboard/caregiver']);
    } else {
      // no option
    }

    this.hideLandingPage();
  }

  private showLandingPage() {
    $('#landingPage').modal({
      backdrop: 'static'
    });
  }

  private hideLandingPage() {
    $('#landingPage').modal('hide');
  }
}
