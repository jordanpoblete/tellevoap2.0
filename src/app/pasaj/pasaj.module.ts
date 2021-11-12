import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasajPageRoutingModule } from './pasaj-routing.module';

import { PasajPage } from './pasaj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasajPageRoutingModule
  ],
  declarations: [PasajPage]
})
export class PasajPageModule {}
