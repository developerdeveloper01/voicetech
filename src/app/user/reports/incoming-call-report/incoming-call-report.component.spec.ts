import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingCallReportComponent } from './incoming-call-report.component';

describe('IncomingCallReportComponent', () => {
  let component: IncomingCallReportComponent;
  let fixture: ComponentFixture<IncomingCallReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncomingCallReportComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingCallReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
