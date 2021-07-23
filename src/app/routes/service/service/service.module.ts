import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { ServiceRoutingModule } from './service-routing.module';
import { LiveCallsComponent } from './live-calls/live-calls.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ContactOperatorComponent } from './contact-operator/contact-operator.component';
import { AgentTableComponent } from './monitoring/agent-table/agent-table.component';
import { QueueTableComponent } from './monitoring/queue-table/queue-table.component';

const COMPONENTS = [LiveCallsComponent,MonitoringComponent ,ContactOperatorComponent];
const COMPONENTS_DYNAMIC = [];
@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ContactOperatorComponent, AgentTableComponent, QueueTableComponent],
  imports: [
    SharedModule,
    ServiceRoutingModule
  ],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class ServiceModule { }
