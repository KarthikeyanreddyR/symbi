import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { ReviewComponent } from './components/review/review.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ParentDashboardComponent } from './components/dashboard/parent-dashboard/parent-dashboard.component';
import { CaregiverDashboardComponent } from './components/dashboard/caregiver-dashboard/caregiver-dashboard.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard/parent', component: ParentDashboardComponent },
  { path: 'dashboard/caregiver', component: CaregiverDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
