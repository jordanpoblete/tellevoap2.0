import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniCondPage } from './ini-cond.page';

const routes: Routes = [
  {
    path: '',
    component: IniCondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniCondPageRoutingModule {}
