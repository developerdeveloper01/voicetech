import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCallsComponent } from './live-calls.component';

describe('LiveCallsComponent', () => {
  let component: LiveCallsComponent;
  let fixture: ComponentFixture<LiveCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveCallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
