import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { DstnumberComponent } from './dstnumber/dstnumber.component';
import { IpsComponent } from './ips/ips.component';
import { NumberListComponent } from './number-list/number-list.component';

const routes: Routes = [
  {
    path: 'dstnumber',
    component: DstnumberComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['AddDST'],
        redirectTo: {
          AddDST: (
            rejectedPermissionName: string,
            activateRouteSnapshot: ActivatedRouteSnapshot,
            routeStateSnapshot: RouterStateSnapshot
          ) => {
            return 'dashboard';
          },
        }
      },
    },
  },
  {
    path: 'ips',
    component: IpsComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['SUPERADMIN'],
        redirectTo: '/dashboard',
      },
    },
  },
  {
    path: 'my-numbers',
    component: NumberListComponent,
    canActivate: [NgxPermissionsGuard],
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
export class NumbersRoutingModule {}
