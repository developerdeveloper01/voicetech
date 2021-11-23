import { NgModule } from '@angular/core';

import { StaffRoutingModule } from './staff-routing.module';
import { AddRoleFormComponent, RoleComponent } from './role/role.component';
import { AddStaffFormComponent, StaffComponent } from './staff/staff.component';
import { SharedModule } from '@shared';

const COMPONENTS = [RoleComponent, StaffComponent];
const COMPONENTS_DYNAMIC = [AddRoleFormComponent, AddStaffFormComponent];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  imports: [SharedModule, StaffRoutingModule],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class StaffModule {}
