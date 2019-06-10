import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilsService {

  constructor() { }

  /**
   * Fetch Url to call api's
   */
  public static getAbsoluteUrl() {
    if (window.location.host.includes('localhost')) {
      return 'http://localhost:3000/api';
    } else {
      return `${window.location.protocol}//${window.location.host}/api`;
    }
  }

  /**
   * Store logged in user.
   */
  private signedInUser = new BehaviorSubject<any>(null);
  signedInUser$ = this.signedInUser.asObservable();

  changeSignedInUser(user: any) {
    this.signedInUser.next(user);
  }

  /**
   * Store caregiver info between components
   */
  private scheduleCaregiver = new BehaviorSubject<any>(null);
  scheduleCaregiver$ = this.scheduleCaregiver.asObservable();

  setCaregiver(caregiver: any) {
    this.scheduleCaregiver.next(caregiver);
  }
}
