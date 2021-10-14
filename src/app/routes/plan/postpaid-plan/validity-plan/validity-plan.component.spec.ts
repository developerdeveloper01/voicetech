import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidityPlanComponent } from './validity-plan.component';

describe('ValidityPlanComponent', () => {
  let component: ValidityPlanComponent;
  let fixture: ComponentFixture<ValidityPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidityPlanComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidityPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
