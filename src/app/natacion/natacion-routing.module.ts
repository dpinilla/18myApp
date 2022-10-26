import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NatacionPage } from './natacion.page';

const routes: Routes = [
  {
    path: '',
    component: NatacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NatacionPageRoutingModule {}
