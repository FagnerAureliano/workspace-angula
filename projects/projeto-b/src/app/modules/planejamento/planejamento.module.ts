import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanejamentoRoutingModule } from './planejamento-routing.module';
import { PlanejamentoComponent } from './planejamento.component';


@NgModule({
  declarations: [
    PlanejamentoComponent
  ],
  imports: [
    CommonModule,
    PlanejamentoRoutingModule
  ]
})
export class PlanejamentoModule { }
