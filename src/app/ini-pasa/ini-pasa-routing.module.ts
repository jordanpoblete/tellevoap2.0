import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniPasaPage } from './ini-pasa.page';

const routes: Routes = [
  {
    path: '',
    component: IniPasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniPasaPageRoutingModule {}
