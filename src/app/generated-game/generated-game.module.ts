import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { GeneratedGameRoutingModule } from "./generated-game-routing-module";
import { GeneratedGameComponent as GeneratedGameComponent } from "./generated-game.component";
import { PairedPlayersComponent } from './paired-players/paired-players.component';
import { UnmatchedPlayersComponent } from './unmatched-players/unmatched-players.component';

@NgModule({
    declarations: [
        GeneratedGameComponent,
        PairedPlayersComponent,
        UnmatchedPlayersComponent
    ],
    imports: [
        RouterModule,
        GeneratedGameRoutingModule,
        CommonModule,
        SharedModule
    ]
})
export class GeneratedGameModule {}