import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCaregiverComponent } from './schedule-caregiver.component';

describe('ScheduleCaregiverComponent', () => {
  let component: ScheduleCaregiverComponent;
  let fixture: ComponentFixture<ScheduleCaregiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleCaregiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCaregiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
