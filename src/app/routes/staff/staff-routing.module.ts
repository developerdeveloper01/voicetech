import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role/role.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  { path: 'role', component: RoleComponent },
  { path: 'staff', component: StaffComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
