import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvrServiceComponent } from './ivr-service.component';

describe('IvrServiceComponent', () => {
  let component: IvrServiceComponent;
  let fixture: ComponentFixture<IvrServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvrServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IvrServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
