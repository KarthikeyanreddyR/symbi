import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCaregiverComponent } from './search-caregiver.component';

describe('SearchCaregiverComponent', () => {
  let component: SearchCaregiverComponent;
  let fixture: ComponentFixture<SearchCaregiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCaregiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCaregiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
