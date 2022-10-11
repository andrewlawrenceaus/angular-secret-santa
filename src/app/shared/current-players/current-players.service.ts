import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class CurrentPlayersService {
    playersChanged = new Subject<string[]>()
    private players: string[] = ["player 1", "player 2"]

    constructor(){}

    addPlayer(player: string){
        this.players.push(player);
        this.playersChanged.next(this.players.slice());
    }

    getPlayers(){
        return this.players.slice();
    }

}