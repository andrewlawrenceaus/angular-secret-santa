import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CurrentPlayersComponent } from "./current-players/current-players.component";
import { PlayerItemComponent } from './current-players/player-item/player-item.component';
import { FamilyGroupItemComponent } from './current-players/family-group-item/family-group-item.component';

@NgModule({
    declarations: [
        CurrentPlayersComponent,
        PlayerItemComponent,
        FamilyGroupItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CurrentPlayersComponent
    ]
})
export class SharedModule { }