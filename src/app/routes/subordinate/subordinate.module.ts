import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';

import { SubordinateRoutingModule } from './subordinate-routing.module';
import {
  AgentComponent,
  AgentFormComponent,
  EditAgentFormComponent,
} from './agent/agent.component';
import {
  AddSubordinateFormComponent,
  EditSubordinatesFormComponent,
  SubordinatesComponent,
} from './subordinates/subordinates.component';
import {
  AgentnewComponent,
  AddAgentFormComponent,
  EditFormComponent,
} from './agentnew/agentnew.component';

const COMPONENTS = [AgentComponent, SubordinatesComponent, AgentnewComponent];
const COMPONENTS_DYNAMIC = [
  AddSubordinateFormComponent,
  EditSubordinatesFormComponent,
  AgentFormComponent,
  EditAgentFormComponent,
  AddAgentFormComponent,
  EditFormComponent,
];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  imports: [SharedModule, SubordinateRoutingModule],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class SubordinateModule {}
