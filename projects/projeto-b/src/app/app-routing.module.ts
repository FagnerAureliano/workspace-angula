import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'execucao',
    loadChildren: () =>
      import('./modules/execucao/execucao.module').then(
        (m) => m.ExecucaoModule
      ),
  },
  {
    path: 'planejamento',
    loadChildren: () =>
      import('./modules/planejamento/planejamento.module').then(
        (m) => m.PlanejamentoModule
      ),
  },
  {
    path: 'moduloum',
    loadChildren: () =>
      import('./modules/moduloum/moduloum.module').then(
        (m) => m.ModuloumModule
      ),
  },
  {
    path: 'mod-teste',
    loadChildren: () =>
      import('./modules/modulo-teste/modulo-teste.module').then(
        (m) => m.ModuloTesteModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
