import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreateGameRoutingModule } from "./create-game-routing-module";
import { CreateGameComponent } from "./create-game.component";

@NgModule({
    declarations: [
        CreateGameComponent
    ],
    imports: [
        RouterModule,
        CreateGameRoutingModule
    ]
})
export class CreateGameModule {}