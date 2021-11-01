import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';

const COMPONENTS = [UsersComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  imports: [SharedModule, UserRoutingModule],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class UserModule {}
