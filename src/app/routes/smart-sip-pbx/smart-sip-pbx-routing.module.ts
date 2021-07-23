import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SipServicesComponent } from './sip-services/sip-services.component';
import { SipUserComponent } from './sip-user/sip-user.component';
import { UserGroupComponent } from './user-group/user-group.component';
const routes: Routes = [
  { path: 'sip-services', component: SipServicesComponent },
  { path: 'sip-user', component: SipUserComponent },
  { path: 'user-group', component: UserGroupComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartSipPbxRoutingModule {}
