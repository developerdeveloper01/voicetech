import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { AddUserFormComponent, UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';


const COMPONENTS = [UsersComponent,UserDetailComponent, UserOverviewComponent, UserSettingsComponent];
const COMPONENTS_DYNAMIC = [AddUserFormComponent];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  imports: [SharedModule, UserRoutingModule,NgxAudioPlayerModule],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class UserModule {}
