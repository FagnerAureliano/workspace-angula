import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloumRoutingModule } from './moduloum-routing.module';
import { ModuloumComponent } from './moduloum.component';


@NgModule({
  declarations: [
    ModuloumComponent
  ],
  imports: [
    CommonModule,
    ModuloumRoutingModule
  ]
})
export class ModuloumModule { }
