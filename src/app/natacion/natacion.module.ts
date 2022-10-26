import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NatacionPageRoutingModule } from './natacion-routing.module';

import { NatacionPage } from './natacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NatacionPageRoutingModule
  ],
  declarations: [NatacionPage]
})
export class NatacionPageModule {}
