import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomingCallReportComponent } from './incoming-call-report/incoming-call-report.component';
import { OutgoingCallReportComponent } from './outgoing-call-report/outgoing-call-report.component';

const routes: Routes = [
  { path: 'incoming-call-report', component: IncomingCallReportComponent },
  { path: 'outgoing-call-report', component: OutgoingCallReportComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
