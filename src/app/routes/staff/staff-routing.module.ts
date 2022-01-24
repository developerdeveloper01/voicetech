import { NumbersComponent } from './staff-detail/numbers/numbers.component';
import { SettingsComponent } from './staff-detail/settings/settings.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role/role.component';
import { StaffComponent } from './staff/staff.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { OverviewComponent } from './staff-detail/overview/overview.component';

const routes: Routes = [
  {
    path: 'role',
    component: RoleComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['SUPERADMIN', 'ADMIN', 'MANAGER', 'RESELLER'],
        redirectTo: '/dashboard',
      },
    },
  },
  {
    path: 'staff',
    component: StaffComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['SUPERADMIN'],
        redirectTo: '/dashboard',
      },
    },
  },
  {
    path: 'staff-detail/:id',
    component: StaffDetailComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'numbers', component: NumbersComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
