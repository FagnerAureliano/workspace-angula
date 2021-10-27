import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanejamentoComponent } from './planejamento.component';

const routes: Routes = [{ path: '', component: PlanejamentoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanejamentoRoutingModule { }
