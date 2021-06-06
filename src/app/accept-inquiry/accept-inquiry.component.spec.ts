import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptInquiryComponent } from './accept-inquiry.component';

describe('AcceptInquiryComponent', () => {
  let component: AcceptInquiryComponent;
  let fixture: ComponentFixture<AcceptInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
