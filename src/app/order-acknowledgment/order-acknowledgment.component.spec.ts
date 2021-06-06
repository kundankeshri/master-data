import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAcknowledgmentComponent } from './order-acknowledgment.component';

describe('OrderAcknowledgmentComponent', () => {
  let component: OrderAcknowledgmentComponent;
  let fixture: ComponentFixture<OrderAcknowledgmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderAcknowledgmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAcknowledgmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
