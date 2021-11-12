import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasajPage } from './pasaj.page';

const routes: Routes = [
  {
    path: '',
    component: PasajPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasajPageRoutingModule {}
