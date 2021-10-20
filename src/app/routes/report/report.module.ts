import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { CdrComponent } from './cdr/cdr.component';

@NgModule({
  declarations: [CdrComponent],
  imports: [CommonModule, ReportRoutingModule],
})
export class ReportModule {}
