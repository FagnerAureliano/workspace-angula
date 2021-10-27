import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloTesteComponent } from './modulo-teste.component';

const routes: Routes = [{ path: '', component: ModuloTesteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloTesteRoutingModule { }
