import { NgModule } from '@angular/core';

import { PlanRoutingModule } from './plan-routing.module';
import {
  AddPrepaidFormComponent,
  AddPrepaidplanOneFormComponent,
  EditPrepaidplanOneFormComponent,
  PrepaidPlanComponent,
} from './prepaid-plan/prepaid-plan.component';
import { PostpaidPlanComponent } from './postpaid-plan/postpaid-plan.component';
import { SharedModule } from '@shared';
import {
  AddValidityPlanFormComponent,
  EditValidityPlanFormComponent,
  ValidityPlanComponent,
} from './postpaid-plan/validity-plan/validity-plan.component';
import {
  AddPtominPlanFormComponent,
  EditPtominPlanFormComponent,
  PricetominPlanComponent,
} from './postpaid-plan/pricetomin-plan/pricetomin-plan.component';
import {
  AddMinutePlanFormComponent,
  EditMinutePlanFormComponent,
  MinutePlanComponent,
} from './postpaid-plan/minute-plan/minute-plan.component';
import {
  AddPostpaidFormComponent,
  AddPostpaidplanOneFormComponent,
  EditPostpaidplanOneFormComponent,
  PostpaidComponent,
} from './postpaid/postpaid.component';

const COMPONENTS = [
  PrepaidPlanComponent,
  PostpaidPlanComponent,
  PostpaidComponent,
  ValidityPlanComponent,
  PricetominPlanComponent,
  MinutePlanComponent,
  AddPostpaidFormComponent,
  AddPostpaidplanOneFormComponent,
  EditPostpaidplanOneFormComponent,
];
const COMPONENTS_DYNAMIC = [
  AddValidityPlanFormComponent,
  EditValidityPlanFormComponent,
  AddPrepaidplanOneFormComponent,
  AddPtominPlanFormComponent,
  EditPtominPlanFormComponent,
  AddMinutePlanFormComponent,
  EditMinutePlanFormComponent,
  AddPrepaidFormComponent,
];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, PostpaidComponent],
  imports: [SharedModule, PlanRoutingModule],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class PlanModule {}
