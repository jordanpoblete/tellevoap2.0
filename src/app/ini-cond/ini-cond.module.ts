import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniCondPageRoutingModule } from './ini-cond-routing.module';

import { IniCondPage } from './ini-cond.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniCondPageRoutingModule
  ],
  declarations: [IniCondPage]
})
export class IniCondPageModule {}
