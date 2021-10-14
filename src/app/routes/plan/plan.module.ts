import { NgModule } from '@angular/core';

import { PlanRoutingModule } from './plan-routing.module';
import { PrepaidPlanComponent } from './prepaid-plan/prepaid-plan.component';
import { PostpaidPlanComponent } from './postpaid-plan/postpaid-plan.component';
import { SharedModule } from '@shared';
import { ValidityPlanComponent } from './postpaid-plan/validity-plan/validity-plan.component';

const COMPONENTS = [PrepaidPlanComponent, PostpaidPlanComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  declarations: [PrepaidPlanComponent, PostpaidPlanComponent, ValidityPlanComponent],
  imports: [SharedModule, PlanRoutingModule],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class PlanModule {}
