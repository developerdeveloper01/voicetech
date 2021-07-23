import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOperatorComponent } from './contact-operator.component';

describe('ContactOperatorComponent', () => {
  let component: ContactOperatorComponent;
  let fixture: ComponentFixture<ContactOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
