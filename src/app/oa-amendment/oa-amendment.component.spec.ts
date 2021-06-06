import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OAAmendmentComponent } from './oa-amendment.component';

describe('OAAmendmentComponent', () => {
  let component: OAAmendmentComponent;
  let fixture: ComponentFixture<OAAmendmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OAAmendmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OAAmendmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
