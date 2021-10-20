import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core';
import { AdminLayoutComponent } from '@theme/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogsComponent } from './logs/logs.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'user/dashboard', component: DashboardComponent },

      {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
      },

      { path: 'logs', component: LogsComponent },
      { path: 'manage', component: ManageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
