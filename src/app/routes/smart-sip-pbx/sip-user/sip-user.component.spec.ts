import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipUserComponent } from './sip-user.component';

describe('SipUserComponent', () => {
  let component: SipUserComponent;
  let fixture: ComponentFixture<SipUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SipUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SipUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
