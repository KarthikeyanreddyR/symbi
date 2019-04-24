import { Component, OnInit } from '@angular/core';

import { ValidateService} from '../../services/validate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;

  constructor(private validateService: ValidateService) { }

  ngOnInit() {
  }

  onSignupSubmit() {
    console.log(123);
    let user = {
      email: this.email,
      password:this.password
    }

    if(!this.validateService.validateSignup(user)) {
      console.log('all fields are required', user);
      return false;
    }

    if(!this.validateService.validateEmail(user.email)) {
      console.log('invalid email', user);
      return false;
    }
  }

}
