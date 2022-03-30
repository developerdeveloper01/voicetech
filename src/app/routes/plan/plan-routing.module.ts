import { PostpaidComponent } from './postpaid/postpaid.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostpaidPlanComponent } from './postpaid-plan/postpaid-plan.component';
import { PrepaidPlanComponent } from './prepaid-plan/prepaid-plan.component';

const routes: Routes = [
  {
    path: 'prepaid-plan',
    component: PrepaidPlanComponent,
    data: {
      permissions: {
        only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
        redirectTo: '/dashboard',
      },
    },
  },
  { path: 'postpaid-plan', component: PostpaidPlanComponent },
  {
    path: 'postpaid',
    component: PostpaidComponent,
    data: {
      permissions: {
        only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
        redirectTo: '/dashboard',
      },
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanRoutingModule {}
