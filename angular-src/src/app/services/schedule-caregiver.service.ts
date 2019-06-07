import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleCaregiverService {

  private scheduleCaregiver = new BehaviorSubject<any>(null);
  scheduleCaregiver$ = this.scheduleCaregiver.asObservable();

  constructor() { }

  setCaregiver(caregiver: any) {
    this.scheduleCaregiver.next(caregiver);
  }
}
