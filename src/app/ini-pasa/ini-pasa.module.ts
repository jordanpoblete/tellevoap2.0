import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniPasaPageRoutingModule } from './ini-pasa-routing.module';

import { IniPasaPage } from './ini-pasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniPasaPageRoutingModule
  ],
  declarations: [IniPasaPage]
})
export class IniPasaPageModule {}
