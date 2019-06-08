import { Component, OnInit } from '@angular/core';
import { CommonUtilsService } from 'src/app/services/common-utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-schedule-caregiver',
  templateUrl: './schedule-caregiver.component.html',
  styleUrls: ['./schedule-caregiver.component.css']
})
export class ScheduleCaregiverComponent implements OnInit {

  constructor(private commonUtilsService: CommonUtilsService) { }

  private subscription: Subscription = new Subscription();
  caregiver$: any;

  ngOnInit() {
    this.subscription.add(this.commonUtilsService.scheduleCaregiver$.subscribe(res => {
      console.log(res);
      this.caregiver$ = res;
    }));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
