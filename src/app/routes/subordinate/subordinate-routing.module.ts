import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent/agent.component';
import { SubordinatesComponent } from './subordinates/subordinates.component';

const routes: Routes = [
  { path: 'subordinates', component: SubordinatesComponent },
  { path: 'agent', component: AgentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubordinateRoutingModule {}
