// core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


// components
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReviewComponent } from './components/review/review.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ParentDashboardComponent } from './components/dashboard/parent-dashboard/parent-dashboard.component';
import { CaregiverDashboardComponent } from './components/dashboard/caregiver-dashboard/caregiver-dashboard.component';

// services
import { ValidateService} from './services/validate.service';
import { UserService } from './services/user.service';
import { JobService } from './services/job.service';

// directives
import { AppPasswordDirective } from './shared/directives/app-password.directive';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { JobComponent } from './components/job/job.component';
import { PostOpenJobComponent } from './components/job/post-open-job/post-open-job.component';
import { PostReviewComponent } from './components/review/post-review/post-review.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AppPasswordDirective,
    ReviewComponent,
    ProfileComponent,
    LandingPageComponent,
    ParentDashboardComponent,
    CaregiverDashboardComponent,
    SidebarComponent,
    JobComponent,
    PostOpenJobComponent,
    PostReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [
    ValidateService,
    UserService,
    JobService
  ],
  bootstrap: [AppComponent],
  exports: [AppPasswordDirective]
})
export class AppModule { }
