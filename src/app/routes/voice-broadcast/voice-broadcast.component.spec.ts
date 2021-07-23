import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceBroadcastComponent } from './voice-broadcast.component';

describe('VoiceBroadcastComponent', () => {
  let component: VoiceBroadcastComponent;
  let fixture: ComponentFixture<VoiceBroadcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceBroadcastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceBroadcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
