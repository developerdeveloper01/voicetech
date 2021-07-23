import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalSipComponent } from './internal-sip.component';

describe('InternalSipComponent', () => {
  let component: InternalSipComponent;
  let fixture: ComponentFixture<InternalSipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalSipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalSipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
