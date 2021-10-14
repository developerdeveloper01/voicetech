import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvrGreetingComponent } from './ivr-greeting.component';

describe('IvrGreetingComponent', () => {
  let component: IvrGreetingComponent;
  let fixture: ComponentFixture<IvrGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IvrGreetingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IvrGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
