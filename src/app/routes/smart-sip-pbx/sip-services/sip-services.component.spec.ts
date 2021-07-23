import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipServicesComponent } from './sip-services.component';

describe('SipServicesComponent', () => {
  let component: SipServicesComponent;
  let fixture: ComponentFixture<SipServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SipServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SipServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
