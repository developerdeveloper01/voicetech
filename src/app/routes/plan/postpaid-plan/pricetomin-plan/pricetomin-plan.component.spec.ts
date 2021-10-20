import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricetominPlanComponent } from './pricetomin-plan.component';

describe('PricetominPlanComponent', () => {
  let component: PricetominPlanComponent;
  let fixture: ComponentFixture<PricetominPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricetominPlanComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricetominPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
