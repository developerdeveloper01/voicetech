import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutePlanComponent } from './minute-plan.component';

describe('MinutePlanComponent', () => {
  let component: MinutePlanComponent;
  let fixture: ComponentFixture<MinutePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinutePlanComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
