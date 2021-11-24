import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { SipServiceRoutingModule } from './sip-service-routing.module';
import { SipProfileComponent } from './sip-profile/sip-profile.component';
import { SipSettingComponent } from './sip-setting/sip-setting.component';
import { ProfileTypeComponent } from './profile-type/profile-type.component';
import { InternalSipComponent } from './sip-setting/internal-sip/internal-sip.component';
import { ExtrenalSipComponent } from './sip-setting/extrenal-sip/extrenal-sip.component';
import { LocalProfileComponent } from './sip-profile/local-profile/local-profile.component';
import { NationalProfileComponent } from './sip-profile/national-profile/national-profile.component';
import { AllProfileOneComponent } from './sip-profile/all-profile-one/all-profile-one.component';
import { LiveCallComponent } from './live-call/live-call.component';


const COMPONENTS = [SipProfileComponent, SipSettingComponent,ProfileTypeComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ProfileTypeComponent, InternalSipComponent, ExtrenalSipComponent, LocalProfileComponent, NationalProfileComponent, AllProfileOneComponent, LiveCallComponent],
  imports: [
    SharedModule,
    SipServiceRoutingModule
  ],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class SipServiceModule { }
