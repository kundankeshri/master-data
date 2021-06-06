import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectInquiryComponent } from './reject-inquiry.component';

describe('RejectInquiryComponent', () => {
  let component: RejectInquiryComponent;
  let fixture: ComponentFixture<RejectInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
