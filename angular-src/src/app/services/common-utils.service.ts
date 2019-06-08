import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilsService {

  constructor() { }

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
