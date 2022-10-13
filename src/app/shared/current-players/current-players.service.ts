import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CurrentPlayersService {
    playersChanged = new Subject<Map<string, string[]>>()
    private players: Map<string, string[]> = new Map<string, string[]>()

    constructor() {
        this.players.set('Lawrence Family', ['Andrew', 'Jess', 'Chris']);
        this.players.set('O\'Grady Family', ['John', 'Bec', 'Alex']);
    }

    addPlayer(name: string, familyGroup: string) {
        if (this.players.has(familyGroup)) {
            this.players.get(familyGroup)?.push(name)
        } else {
            this.players.set(familyGroup, [name])
        }
        this.playersChanged.next(this.players);
    }

    getPlayers() {
        return this.players;
    }

    removePlayer(name: string, familyGroup: string) {
        let playersInFamily = this.players.get(familyGroup);
        if (playersInFamily) {
            const index = playersInFamily.indexOf(name, 0);
            if (index > -1) {
                playersInFamily.splice(index, 1);
                this.players.set(familyGroup, playersInFamily)
            }
        }
        this.playersChanged.next(this.players);
    }
}