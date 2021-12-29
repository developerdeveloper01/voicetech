import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

import { VoiceRoutingModule } from './voice-routing.module';
import { VoiceFilesComponent } from './voice-files/voice-files.component';

const COMPONENTS = [VoiceFilesComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  imports: [SharedModule, VoiceRoutingModule, NgxAudioPlayerModule],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class VoiceModule {}
