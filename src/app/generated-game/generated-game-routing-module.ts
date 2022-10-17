import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GeneratedGameComponent } from "./generated-game.component";
import { CanActivateGame } from "./generated-game.guard";

const routes: Routes = [
    { path: '', component: GeneratedGameComponent, canActivate: [CanActivateGame] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [CanActivateGame]
})
export class GeneratedGameRoutingModule{}