import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/create-game', pathMatch: 'full' },
  {
    path: 'create-game', loadChildren: () => import('./create-game/create-game.module')
      .then(m => m.CreateGameModule)
  },
  {
    path: 'generated-game', loadChildren: () => import('./generated-game/generated-game.module')
      .then(m => m.GeneratedGameModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
