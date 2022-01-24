import { NgModule } from '@angular/core';

import { StaffRoutingModule } from './staff-routing.module';
import { AddRoleFormComponent, EditRoleFormComponent, RoleComponent } from './role/role.component';
import {
  AddStaffFormComponent,
  EditStaffFormComponent,
  StaffComponent,
} from './staff/staff.component';
import { SharedModule } from '@shared';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { OverviewComponent } from './staff-detail/overview/overview.component';
import { SettingsComponent } from './staff-detail/settings/settings.component';
import { NumbersComponent } from './staff-detail/numbers/numbers.component';

const COMPONENTS = [
  RoleComponent,
  StaffComponent,
  StaffDetailComponent,
  OverviewComponent,
  SettingsComponent,
];
const COMPONENTS_DYNAMIC = [
  AddRoleFormComponent,
  AddStaffFormComponent,
  EditRoleFormComponent,
  EditStaffFormComponent,
];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, NumbersComponent],
  imports: [SharedModule, StaffRoutingModule],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class StaffModule {}
