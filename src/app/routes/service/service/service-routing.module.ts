import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactOperatorComponent } from './contact-operator/contact-operator.component';
import { LiveCallsComponent } from './live-calls/live-calls.component';
import { MonitoringComponent } from './monitoring/monitoring.component'


const routes: Routes = [{ path: 'contact-operator', component: ContactOperatorComponent },{ path: 'live-call', component: LiveCallsComponent },{ path:'monitoring', component: MonitoringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
