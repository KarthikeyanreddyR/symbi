import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { ReviewComponent } from './components/review/review.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ParentDashboardComponent } from './components/dashboard/parent-dashboard/parent-dashboard.component';
import { CaregiverDashboardComponent } from './components/dashboard/caregiver-dashboard/caregiver-dashboard.component';
import { JobComponent } from './components/job/job.component';
import { SearchCaregiverComponent } from './components/search-caregiver/search-caregiver.component';
import { ScheduleCaregiverComponent } from './components/schedule-caregiver/schedule-caregiver.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'review', canActivate: [AuthGuardService], component: ReviewComponent },
  { path: 'profile', canActivate: [AuthGuardService], component: ProfileComponent },
  { path: 'dashboard/parent', canActivate: [AuthGuardService], component: ParentDashboardComponent },
  { path: 'dashboard/caregiver', canActivate: [AuthGuardService], component: CaregiverDashboardComponent },
  { path: 'jobs', canActivate: [AuthGuardService], component: JobComponent },
  { path: 'caregivers', canActivate: [AuthGuardService], component: SearchCaregiverComponent },
  { path: 'caregivers/schedule', canActivate: [AuthGuardService], component: ScheduleCaregiverComponent },
  { path: 'unauthorized', component: ErrorComponent, data: { type: 'Unauthorized' } },
  { path: '**', component: ErrorComponent, data: { type: 'PageNotFound' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
