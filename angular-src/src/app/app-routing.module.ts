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

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard/parent', component: ParentDashboardComponent },
  { path: 'dashboard/caregiver', component: CaregiverDashboardComponent },
  { path: 'jobs', component: JobComponent },
  { path: 'caregivers', component: SearchCaregiverComponent },
  { path: 'caregivers/schedule', component: ScheduleCaregiverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
