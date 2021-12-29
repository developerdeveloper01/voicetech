import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceFilesComponent } from './voice-files.component';

describe('VoiceFilesComponent', () => {
  let component: VoiceFilesComponent;
  let fixture: ComponentFixture<VoiceFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoiceFilesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
