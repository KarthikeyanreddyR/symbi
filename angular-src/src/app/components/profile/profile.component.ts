import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private activeTab: number; //Current active tab
  constructor() {
    this.activeTab = 0;
  }

  ngOnInit() {
   
  }


  changeTab(tabNum: number) {
    
  }

}
