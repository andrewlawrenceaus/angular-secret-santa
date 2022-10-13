import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreateGameRoutingModule } from "./create-game-routing-module";
import { CreateGameComponent } from "./create-game.component";
import { AddPlayerComponent } from './add-player/add-player.component';
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        CreateGameComponent,
        AddPlayerComponent
    ],
    imports: [
        RouterModule,
        CreateGameRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class CreateGameModule {}