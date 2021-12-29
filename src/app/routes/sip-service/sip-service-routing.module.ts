import { LiveCallComponent } from './live-call/live-call.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SipProfileComponent } from './sip-profile/sip-profile.component';
import { SipSettingComponent } from './sip-setting/sip-setting.component';
import { ProfileTypeComponent } from './profile-type/profile-type.component';

const routes: Routes = [
  {
    path: 'sip-setting',
    component: SipSettingComponent,
    data: {
      permissions: {
        only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
        redirectTo: '/dashboard',
      },
    },
  },
  {
    path: 'sip-profile',
    component: SipProfileComponent,
    data: {
      permissions: {
        only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
        redirectTo: '/dashboard',
      },
    },
  },
  {
    path: 'profile-type',
    component: ProfileTypeComponent,
    data: {
      permissions: {
        only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
        redirectTo: '/dashboard',
      },
    },
  },
  {
    path: 'live-calls',
    component: LiveCallComponent,
    data: {
      permissions: {
        only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
        redirectTo: '/dashboard',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SipServiceRoutingModule {}
