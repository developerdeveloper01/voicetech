import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostpaidPlanComponent } from './postpaid-plan/postpaid-plan.component';
import { PrepaidPlanComponent } from './prepaid-plan/prepaid-plan.component';

const routes: Routes = [
  { path: 'prepaid-plan', component: PrepaidPlanComponent },
  { path: 'postpaid-plan', component: PostpaidPlanComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanRoutingModule {}
