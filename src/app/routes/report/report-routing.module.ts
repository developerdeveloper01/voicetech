import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdrComponent } from './cdr/cdr.component';

const routes: Routes = [{ path: 'cdr', component: CdrComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
