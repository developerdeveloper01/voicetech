import { NgModule } from '@angular/core';

import { ReportsRoutingModule } from './reports-routing.module';
import { IncomingCallReportComponent } from './incoming-call-report/incoming-call-report.component';
import { OutgoingCallReportComponent } from './outgoing-call-report/outgoing-call-report.component';
import { SharedModule } from '@shared';

const COMPONENTS = [IncomingCallReportComponent, OutgoingCallReportComponent];
const COMPONENTS_DYNAMIC = [];
@NgModule({
  declarations: [IncomingCallReportComponent, OutgoingCallReportComponent],
  imports: [SharedModule, ReportsRoutingModule],
})
export class ReportsModule {}
