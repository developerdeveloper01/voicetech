import { NgModule } from '@angular/core';
import { NumbersRoutingModule } from './numbers-routing.module';
import {
  AddDstNumberFormComponent,
  DstnumberComponent,
  EditDstNumberFormComponent,
} from './dstnumber/dstnumber.component';
import { AddIpFormComponent, EditIpFormComponent, IpsComponent } from './ips/ips.component';
import { SharedModule } from '@shared';
import { NumberListComponent } from './number-list/number-list.component';

const COMPONENTS = [DstnumberComponent, IpsComponent, NumberListComponent];
const COMPONENTS_DYNAMIC = [
  AddDstNumberFormComponent,
  EditDstNumberFormComponent,
  AddIpFormComponent,
  EditIpFormComponent,
];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  imports: [SharedModule, NumbersRoutingModule],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class NumbersModule {}
