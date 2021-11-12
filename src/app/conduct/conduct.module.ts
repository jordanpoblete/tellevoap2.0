import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductPageRoutingModule } from './conduct-routing.module';

import { ConductPage } from './conduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductPageRoutingModule
  ],
  declarations: [ConductPage]
})
export class ConductPageModule {}
