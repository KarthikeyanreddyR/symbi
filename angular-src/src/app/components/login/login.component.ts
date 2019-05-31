import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ApiResponse } from 'src/app/shared/interfaces/response';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  constructor(private formBuilder: FormBuilder, private userservice: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    console.log(this.loginForm.value);
    this.userservice.loginUser(this.loginForm.value).subscribe((res: ApiResponse) => {
      console.log(res);
      if(res.success) {
        // login successful
        this.showLandingPage();
      } else {
        // invalid credentials
      }
    },
    err => {
      alert('error occured while login!!')
    },
    () => {

    })
  }

  private showLandingPage() {
    $('#landingPage').modal({
      backdrop: 'static'
    });
  }

}
