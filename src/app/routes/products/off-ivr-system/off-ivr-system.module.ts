import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffIvrSystemRoutingModule } from './off-ivr-system-routing.module';
import { IvrGreetingComponent } from './ivr-greeting/ivr-greeting.component';
import { SharedModule } from '@shared';

const COMPONENTS = [IvrGreetingComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  declarations: [IvrGreetingComponent],
  imports: [SharedModule, OffIvrSystemRoutingModule],
})
export class OffIvrSystemModule {}
