import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AckOrderComponent } from './ack-order.component';

describe('AckOrderComponent', () => {
  let component: AckOrderComponent;
  let fixture: ComponentFixture<AckOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AckOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AckOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
