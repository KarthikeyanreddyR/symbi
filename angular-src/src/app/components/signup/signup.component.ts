import { Component, OnInit } from '@angular/core';

import { ValidateService} from '../../services/validate.service';
import { Parent } from 'src/app/shared/models/parent/parent';
import { User, Profile } from 'src/app/shared/models/user';
import { UserType } from 'src/app/shared/models/enums';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string;
  email: string;
  password: string;

  constructor(private validateService: ValidateService) { }

  ngOnInit() {
  }

  onSignupSubmit() {
    console.log(123);
    let user = {
      name: this.name,
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

    let p = new User();
    p.firstName = user.name;
    p.email = user.email;
    p.password = user.password;

    console.log(p);

  }

}
