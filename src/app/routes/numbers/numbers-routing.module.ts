import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DstnumberComponent } from './dstnumber/dstnumber.component';
import { IpsComponent } from './ips/ips.component';

const routes: Routes = [
  { path: 'dstnumber', component: DstnumberComponent },
  { path: 'ips', component: IpsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumbersRoutingModule { }
