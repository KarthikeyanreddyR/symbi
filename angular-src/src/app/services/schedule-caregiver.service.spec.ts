import { TestBed } from '@angular/core/testing';

import { ScheduleCaregiverService } from './schedule-caregiver.service';

describe('ScheduleCaregiverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScheduleCaregiverService = TestBed.get(ScheduleCaregiverService);
    expect(service).toBeTruthy();
  });
});
