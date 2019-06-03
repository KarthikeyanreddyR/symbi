import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { ValidateService} from '../../services/validate.service';
import { Parent } from 'src/app/shared/models/parent/parent';
import { User, Profile } from 'src/app/shared/models/user';
import { UserType } from 'src/app/shared/models/enums';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerSuccess: boolean;

  constructor(private validateService: ValidateService, private formBuilder: FormBuilder, private userservice: UserService) {
    this.registerSuccess = false;
  }

  signUpForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
  });

  get name() {
    return this.signUpForm.get('name');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }

  ngOnInit() {
  }

  onSignupSubmit() {
    console.log(this.signUpForm.value);
    let _signupInfo = this.signUpForm.value;

    this.userservice.registerUser(_signupInfo).subscribe(res => {
      console.log(res);
      if(res.success) {
        // registered success
        this.registerSuccess = true;
      } else {
        // fail
      }
    },
    err => {
      // error handling
    },
    () => {

    })
  }

}
