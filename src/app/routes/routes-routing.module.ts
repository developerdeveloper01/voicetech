import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from '@env/environment';

import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { AuthGuard } from '@core/authentication/auth.guard';
import { IvrServiceComponent } from './ivr-service/ivr-service.component';
import { CallCenterComponent } from './call-center/call-center.component';
import { VoiceBroadcastComponent } from './voice-broadcast/voice-broadcast.component';
import { SmsEmailConfigurationComponent } from './sms-email-configuration/sms-email-configuration.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { NetworkComponent } from './network/network.component';
import { SecurityComponent } from './security/security.component';
import { SystemSettingComponent } from './system-setting/system-setting.component';
import { AgentTableComponent } from './service/service/monitoring/agent-table/agent-table.component';
import { QueueTableComponent } from './service/service/monitoring/queue-table/queue-table.component';
import { ExtrenalSipComponent } from './sip-service/sip-setting/extrenal-sip/extrenal-sip.component';
import { InternalSipComponent } from './sip-service/sip-setting/internal-sip/internal-sip.component';
import { LocalProfileComponent } from './sip-service/sip-profile/local-profile/local-profile.component';
import { NationalProfileComponent } from './sip-service/sip-profile/national-profile/national-profile.component';
import { AllProfileOneComponent } from './sip-service/sip-profile/all-profile-one/all-profile-one.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ChatComponent } from './chat/chat.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { FollowupComponent } from './followup/followup.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'design',
        loadChildren: () => import('./design/design.module').then(m => m.DesignModule),
      },
      {
        path: 'material',
        loadChildren: () => import('./material/material.module').then(m => m.MaterialModule),
      },
      {
        path: 'media',
        loadChildren: () => import('./media/media.module').then(m => m.MediaModule),
      },
      {
        path: 'sip-service',
        loadChildren: () =>
          import('./sip-service/sip-service.module').then(m => m.SipServiceModule),
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
      },
      {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'sessions',
        loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
      },
      {
        path: 'helpers',
        loadChildren: () => import('./helpers/helpers.module').then(m => m.HelpersModule),
      },
      {
        path: 'permissions',
        loadChildren: () =>
          import('./permissions/permissions.module').then(m => m.PermissionsModule),
      },
      {
        path: 'service',
        loadChildren: () => import('./service/service/service.module').then(m => m.ServiceModule),
      },
      {
        path: 'report',
        loadChildren: () => import('./report/report.module').then(m => m.ReportModule),
      },
      {
        path: 'products/off-ivr-system',
        loadChildren: () =>
          import('./products/off-ivr-system/off-ivr-system.module').then(m => m.OffIvrSystemModule),
      },

      { path: 'ivr-services', component: IvrServiceComponent },
      { path: 'chat', component: ChatComponent,canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['ViewChat'],
          redirectTo: {
            ViewChat: (
              rejectedPermissionName: string,
              activateRouteSnapshot: ActivatedRouteSnapshot,
              routeStateSnapshot: RouterStateSnapshot
            ) => {
              return 'dashboard';
            },
          },
        },
      }, },
      { path: 'call-center', component: CallCenterComponent },
      { path: 'voice-broadcast', component: VoiceBroadcastComponent },
      { path: 'sms-email-configuration', component: SmsEmailConfigurationComponent },
      { path: 'list-manager', component: ListManagerComponent },

      {
        path: 'enquiry',
        component: EnquiryComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['ViewEnquiry'],
            redirectTo: {
              ViewEnquiry: (
                rejectedPermissionName: string,
                activateRouteSnapshot: ActivatedRouteSnapshot,
                routeStateSnapshot: RouterStateSnapshot
              ) => {
                return 'dashboard';
              },
            },
          },
        },
      },
      { path: 'followup/:id', component: FollowupComponent,canActivate: [NgxPermissionsGuard],
      data: {
        permissions: {
          only: ['FollowupEnquiry'],
          redirectTo: {
            FollowupEnquiry: (
              rejectedPermissionName: string,
              activateRouteSnapshot: ActivatedRouteSnapshot,
              routeStateSnapshot: RouterStateSnapshot
            ) => {
              return 'dashboard';
            },
          },
        },
      }, },
      { path: 'network', component: NetworkComponent },
      { path: 'security', component: SecurityComponent },
      { path: 'system-setting', component: SystemSettingComponent },
      { path: 'monitoring/agent-table', component: AgentTableComponent },
      { path: 'monitoring/queue-table', component: QueueTableComponent },
      { path: 'sip-service/sip-setting/extrenal-sip', component: ExtrenalSipComponent },
      { path: 'sip-service/sip-setting/internal-sip', component: InternalSipComponent },
      { path: 'sip-service/sip-profile/local-profile', component: LocalProfileComponent },
      { path: 'sip-service/sip-profile/national-profile', component: NationalProfileComponent },
      { path: 'sip-service/sip-profile/all-profile-one', component: AllProfileOneComponent },
      {
        path: 'smart-sip-pbx',
        loadChildren: () =>
          import('./smart-sip-pbx/smart-sip-pbx.module').then(m => m.SmartSipPbxModule),
      },
      {
        path: 'staff',
        loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule),
      },
      {
        path: 'numbers',
        loadChildren: () => import('./numbers/numbers.module').then(m => m.NumbersModule),
      },
      {
        path: 'plan',
        loadChildren: () => import('./plan/plan.module').then(m => m.PlanModule),
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
      },
      {
        path: 'subordinate',
        loadChildren: () =>
          import('./subordinate/subordinate.module').then(m => m.SubordinateModule),
      },
      {
        path: 'voice',
        loadChildren: () => import('./voice/voice.module').then(m => m.VoiceModule),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
