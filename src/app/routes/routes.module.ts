import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { SipServiceModule } from './sip-service/sip-service.module';
import { IvrServiceComponent } from './ivr-service/ivr-service.component';
import { CallCenterComponent } from './call-center/call-center.component';
import { VoiceBroadcastComponent } from './voice-broadcast/voice-broadcast.component';
import { SmsEmailConfigurationComponent } from './sms-email-configuration/sms-email-configuration.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { ReportComponent } from './report/report.component';
import { NetworkComponent } from './network/network.component';
import { SecurityComponent } from './security/security.component';
import { SystemSettingComponent } from './system-setting/system-setting.component';
import { EnquiryComponent } from './enquiry/enquiry.component';

const COMPONENTS = [DashboardComponent, LoginComponent, RegisterComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule, SipServiceModule],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC,
    IvrServiceComponent,
    CallCenterComponent,
    VoiceBroadcastComponent,
    SmsEmailConfigurationComponent,
    ListManagerComponent,
    ReportComponent,
    NetworkComponent,
    SecurityComponent,
    SystemSettingComponent,
    EnquiryComponent,
  ],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class RoutesModule {}
