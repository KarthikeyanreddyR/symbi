import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { forEach } from '@angular/router/src/utils/collection';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit() {

  }

}
