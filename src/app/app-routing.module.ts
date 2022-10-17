import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/how-to-play', pathMatch: 'full' },
  {
    path: 'how-to-play', loadChildren: () => import('./how-to-play/how-to-play.module')
      .then(m => m.GeneratedGameModule)
  },
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
