import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingCallReportComponent } from './outgoing-call-report.component';

describe('OutgoingCallReportComponent', () => {
  let component: OutgoingCallReportComponent;
  let fixture: ComponentFixture<OutgoingCallReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutgoingCallReportComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingCallReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
