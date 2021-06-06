import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryReviewComponent } from './enquiry-review.component';

describe('EnquiryReviewComponent', () => {
  let component: EnquiryReviewComponent;
  let fixture: ComponentFixture<EnquiryReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiryReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
