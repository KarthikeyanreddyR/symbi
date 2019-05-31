import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public openDashboard(userType: number) {
    if(userType === 0) {
      this.router.navigate(['/dashboard/parent']);
    } else if(userType === 1) {
      this.router.navigate(['/dashboard/caregiver']);
    } else {
      // no option
    }

    this.hideLandingPage();
  }

  private hideLandingPage() {
    $('#landingPage').modal('hide');
  }
}
