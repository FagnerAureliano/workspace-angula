import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloTesteRoutingModule } from './modulo-teste-routing.module';
import { ModuloTesteComponent } from './modulo-teste.component';


@NgModule({
  declarations: [
    ModuloTesteComponent
  ],
  imports: [
    CommonModule,
    ModuloTesteRoutingModule
  ]
})
export class ModuloTesteModule { }
