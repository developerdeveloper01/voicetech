import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IvrGreetingComponent } from './ivr-greeting/ivr-greeting.component';

const routes: Routes = [{ path: 'ivr-greeting', component: IvrGreetingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffIvrSystemRoutingModule {}
