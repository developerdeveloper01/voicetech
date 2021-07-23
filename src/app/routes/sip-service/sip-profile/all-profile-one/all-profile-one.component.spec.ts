import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProfileOneComponent } from './all-profile-one.component';

describe('AllProfileOneComponent', () => {
  let component: AllProfileOneComponent;
  let fixture: ComponentFixture<AllProfileOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProfileOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProfileOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
