import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';

import { SmartSipPbxRoutingModule } from './smart-sip-pbx-routing.module';

import * as Module from 'module';
import { MODULE_CONFIG } from '@angularclass/hmr';
import { SipServicesComponent } from './sip-services/sip-services.component';
import { SipUserComponent } from './sip-user/sip-user.component';
import { UserGroupComponent } from './user-group/user-group.component';

const COMPONENTS = [SipUserComponent, SipServicesComponent,UserGroupComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC,SipUserComponent, SipServicesComponent,UserGroupComponent],
  imports: [
    SharedModule,
   SmartSipPbxRoutingModule
  ],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class SmartSipPbxModule {}
