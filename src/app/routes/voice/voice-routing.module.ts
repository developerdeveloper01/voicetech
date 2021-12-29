import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { VoiceFilesComponent } from './voice-files/voice-files.component';

const routes: Routes = [
  {
    path: 'voice-files',
    component: VoiceFilesComponent,
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
export class VoiceRoutingModule {}
