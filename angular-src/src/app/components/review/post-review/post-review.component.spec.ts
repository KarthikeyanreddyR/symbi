import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReviewComponent } from './post-review.component';

describe('PostReviewComponent', () => {
  let component: PostReviewComponent;
  let fixture: ComponentFixture<PostReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
