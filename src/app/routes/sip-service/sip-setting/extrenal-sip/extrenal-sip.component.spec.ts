import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrenalSipComponent } from './extrenal-sip.component';

describe('ExtrenalSipComponent', () => {
  let component: ExtrenalSipComponent;
  let fixture: ComponentFixture<ExtrenalSipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrenalSipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrenalSipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
