import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExecucaoComponent } from './execucao.component';

const routes: Routes = [{ path: '', component: ExecucaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecucaoRoutingModule { }
