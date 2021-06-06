import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringSalesProcessComponent } from './monitoring-sales-process.component';

describe('MonitoringSalesProcessComponent', () => {
  let component: MonitoringSalesProcessComponent;
  let fixture: ComponentFixture<MonitoringSalesProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringSalesProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringSalesProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
