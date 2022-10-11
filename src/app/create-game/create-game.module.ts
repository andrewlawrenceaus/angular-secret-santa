import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreateGameRoutingModule } from "./create-game-routing-module";
import { CreateGameComponent } from "./create-game.component";
import { AddPlayerComponent } from './add-player/add-player.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        CreateGameComponent,
        AddPlayerComponent
    ],
    imports: [
        RouterModule,
        CreateGameRoutingModule,
        SharedModule
    ]
})
export class CreateGameModule {}