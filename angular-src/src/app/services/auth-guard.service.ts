import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { CommonUtilsService } from './common-utils.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {

  constructor(private commonUtilsService: CommonUtilsService, private router: Router) {}

  canActivate() {
    return this.commonUtilsService.signedInUser$.pipe(map(res => {
      if(!res) {
        return this.router.parseUrl('/unauthorized');
      } else {
        return true;
      }
    }));
  }
}
