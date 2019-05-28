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
  // name: string;
  // email: string;
  // password: string;

  constructor(private validateService: ValidateService, private formBuilder: FormBuilder, private userservice: UserService) { }

  // signUpForm: FormGroup = new FormGroup({
  //   name : new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // });


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
    // console.log(123);
    // let user = {
    //   name: this.name,
    //   email: this.email,
    //   password:this.password
    // }

    // if(!this.validateService.validateSignup(user)) {
    //   console.log('all fields are required', user);
    //   return false;
    // }

    // if(!this.validateService.validateEmail(user.email)) {
    //   console.log('invalid email', user);
    //   return false;
    // }

    // let p = new User();
    // p.firstName = user.name;
    // p.email = user.email;
    // p.password = user.password;

    // console.log(p);

    console.log(this.signUpForm.value);
    let _signupInfo = this.signUpForm.value;

    this.userservice.registerUser(_signupInfo).subscribe(res => {
      console.log(res);
    })
  }

}
