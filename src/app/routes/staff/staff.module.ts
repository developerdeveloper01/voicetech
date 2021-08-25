import { NgModule } from '@angular/core';

import { StaffRoutingModule } from './staff-routing.module';
import { RoleComponent } from './role/role.component';
import { StaffComponent } from './staff/staff.component';
import { SharedModule } from '@shared';

const COMPONENTS = [RoleComponent, StaffComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, RoleComponent, StaffComponent],
  imports: [SharedModule, StaffRoutingModule],
})
export class StaffModule {}
