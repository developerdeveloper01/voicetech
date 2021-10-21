import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import {
  AddCdrFileFormComponent,
  CdrComponent,
  EditCdrFileFormComponent,
} from './cdr/cdr.component';
import { SharedModule } from '@shared';

const COMPONENTS = [CdrComponent];
const COMPONENTS_DYNAMIC = [AddCdrFileFormComponent, EditCdrFileFormComponent];
@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, CdrComponent],
  imports: [SharedModule, ReportRoutingModule],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class ReportModule {}
