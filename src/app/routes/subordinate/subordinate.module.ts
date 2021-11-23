import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';

import { SubordinateRoutingModule } from './subordinate-routing.module';
import { AgentComponent } from './agent/agent.component';
import {
  AddSubordinateFormComponent,
  SubordinatesComponent,
} from './subordinates/subordinates.component';

const COMPONENTS = [AgentComponent, SubordinatesComponent];
const COMPONENTS_DYNAMIC = [AddSubordinateFormComponent];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  imports: [SharedModule, SubordinateRoutingModule],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class SubordinateModule {}
