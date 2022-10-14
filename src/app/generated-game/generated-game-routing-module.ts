import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GeneratedGameComponent } from "./generated-game.component";

const routes: Routes = [
    { path: '', component: GeneratedGameComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GeneratedGameRoutingModule{}