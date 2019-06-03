import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOpenJobComponent } from './post-open-job.component';

describe('PostOpenJobComponent', () => {
  let component: PostOpenJobComponent;
  let fixture: ComponentFixture<PostOpenJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOpenJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOpenJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
