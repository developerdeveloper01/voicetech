import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsEmailConfigurationComponent } from './sms-email-configuration.component';

describe('SmsEmailConfigurationComponent', () => {
  let component: SmsEmailConfigurationComponent;
  let fixture: ComponentFixture<SmsEmailConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsEmailConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsEmailConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
