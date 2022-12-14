import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HowToPlayComponent } from "./how-to-play.component";

const routes: Routes = [
    { path: '', component: HowToPlayComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HowToPlayRoutingModule{}