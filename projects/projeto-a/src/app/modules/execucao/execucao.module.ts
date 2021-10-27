import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecucaoRoutingModule } from './execucao-routing.module';
import { ExecucaoComponent } from './execucao.component';


@NgModule({
  declarations: [
    ExecucaoComponent
  ],
  imports: [
    CommonModule,
    ExecucaoRoutingModule
  ]
})
export class ExecucaoModule { }
