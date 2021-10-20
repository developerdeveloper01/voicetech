import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogsComponent } from './logs/logs.component';
import { ManageComponent } from './manage/manage.component';

const COMPONENTS = [DashboardComponent];
const COMPONENTS_DYNAMIC = [];
@NgModule({
  imports: [SharedModule, UserRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, LogsComponent, ManageComponent],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class UserModule {}
