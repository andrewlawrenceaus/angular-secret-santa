import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreateGameRoutingModule } from "./create-game-routing-module";
import { CreateGameComponent } from "./create-game.component";
import { AddPlayerComponent } from './add-player/add-player.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CurrentPlayersComponent } from "./current-players/current-players.component";
import { FamilyGroupItemComponent } from "./current-players/family-group-item/family-group-item.component";
import { PlayerItemComponent } from "./current-players/player-item/player-item.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        CreateGameComponent,
        AddPlayerComponent,
        CurrentPlayersComponent,
        PlayerItemComponent,
        FamilyGroupItemComponent
    ],
    imports: [
        RouterModule,
        CreateGameRoutingModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class CreateGameModule {}