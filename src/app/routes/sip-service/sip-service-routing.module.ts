import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SipProfileComponent } from './sip-profile/sip-profile.component';
import { SipSettingComponent } from './sip-setting/sip-setting.component';
import { ProfileTypeComponent } from './profile-type/profile-type.component';

const routes: Routes = [
  { path: 'sip-setting', component: SipSettingComponent },
  { path: 'sip-profile', component: SipProfileComponent },
  { path: 'profile-type', component: ProfileTypeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SipServiceRoutingModule {}
