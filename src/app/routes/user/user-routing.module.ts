import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['AddUser','ViewUser','EditUser','DeleteUser'],
      },
    },
  },
  {
    path: 'user-detail/:id',
    component: UserDetailComponent,
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
export class UserRoutingModule {}
