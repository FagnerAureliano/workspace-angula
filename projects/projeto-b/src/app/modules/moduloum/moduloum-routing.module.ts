import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloumComponent } from './moduloum.component';

const routes: Routes = [{ path: '', component: ModuloumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloumRoutingModule { }
