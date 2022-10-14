import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { GameInformation } from "../game-information.model";
import { PlayerPair } from "../player-pair.model";
import { Player } from "../player.model";

@Injectable({
    providedIn: 'root'
})
export class CurrentPlayersService {
    initialPlayersMapChanged = new Subject<Map<string, string[]>>();
    private initialPlayersMap: Map<string, string[]> = new Map<string, string[]>();

    gameInformationChanged = new Subject<GameInformation>();
    private gameInformation: GameInformation | undefined;

    //Test data for development
    private player1: Player = new Player('Andrew', 'Lawrence Family')
    private player2: Player = new Player('Jess', 'Lawrence Family')
    private player3: Player = new Player('Chris', 'Lawrence Family')
    private player4: Player = new Player('John', 'O\'Grady Family')
    private player5: Player = new Player('Bec', 'O\'Grady Family')
    private player6: Player = new Player('Alex', 'O\'Grady Family')

    constructor() {
        this.addPlayer(this.player1.name, this.player1.familyGroup);
        this.addPlayer(this.player2.name, this.player2.familyGroup);
        this.addPlayer(this.player3.name, this.player3.familyGroup);
        this.addPlayer(this.player4.name, this.player4.familyGroup);
        this.addPlayer(this.player5.name, this.player5.familyGroup);
        this.addPlayer(this.player6.name, this.player6.familyGroup);
    }

    addPlayer(name: string, familyGroup: string) {
        if (this.initialPlayersMap.has(familyGroup)) {
            this.initialPlayersMap.get(familyGroup)?.push(name)
        } else {
            this.initialPlayersMap.set(familyGroup, [name])
        }
        this.initialPlayersMapChanged.next(this.initialPlayersMap);
    }

    getPlayers() {
        return this.initialPlayersMap;
    }

    getGameInformation() {
        return this.gameInformation;
    }

    removePlayer(name: string, familyGroup: string) {
        let playersInFamily = this.initialPlayersMap.get(familyGroup);
        if (playersInFamily) {
            const index = playersInFamily.indexOf(name, 0);
            if (index > -1) {
                playersInFamily.splice(index, 1);
                this.initialPlayersMap.set(familyGroup, playersInFamily)
            }
        }
        this.initialPlayersMapChanged.next(this.initialPlayersMap);
    }

    generateGame() {

        let playerPair1 = new PlayerPair(this.player1, this.player4);
        let playerPair2 = new PlayerPair(this.player4, this.player2);
        let playerPair3 = new PlayerPair(this.player3, this.player5);
        
        this.gameInformation = new GameInformation([playerPair1, playerPair2, playerPair3],
            [this.player2, this.player5],
            [this.player1, this.player6])
        this.gameInformationChanged.next(this.gameInformation);    
    }
}