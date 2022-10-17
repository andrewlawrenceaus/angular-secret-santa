import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { GameInformation } from "./game-information.model";
import { PlayerPair } from "./player-pair.model";
import { Player } from "./player.model";

@Injectable({
    providedIn: 'root'
})
export class GameManagementService {
    initialPlayersMapChanged = new Subject<Map<string, string[]>>();
    private initialPlayersMap: Map<string, string[]> = new Map<string, string[]>();

    gameInformationChanged = new Subject<GameInformation>();
    private gameInformation: GameInformation = new GameInformation();

    constructor() {
        this.initialiseTestData();
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
        this.matchPlayers()
        this.gameInformationChanged.next(this.gameInformation);
    }

    initialiseGameInformation() {
        this.gameInformation.matchedPairs = [];
        var mapDesc = new Map([...this.initialPlayersMap].sort((a, b) =>
            b[1].length - a[1].length));

        mapDesc.forEach((value, familyKey) => {
            value.forEach((name) => {
                this.gameInformation?.unmatchedGivers.push(new Player(name, familyKey))
            })
        })

        this.gameInformation.unmatchedReceivers = [...this.gameInformation.unmatchedGivers]
    }

    matchPlayers() {
        this.initialiseGameInformation();
        const givers = [...this.gameInformation.unmatchedGivers]
        let bestProposedGame = new GameInformation();
        this.copyGameInformation(this.gameInformation, bestProposedGame);

        let i = 10;
        while (i > 0 && this.gameInformation.unmatchedGivers.length > 0) {
            let proposedGame = new GameInformation();
            this.copyGameInformation(this.gameInformation, proposedGame);
            givers.forEach((giver) => {
                let receiver = this.findRandomReceiver(giver, proposedGame.unmatchedReceivers);
                if (receiver != null) {
                    proposedGame.matchedPairs.push(new PlayerPair(giver, receiver));
                    this.removePlayerFromArray(giver, proposedGame.unmatchedGivers);
                    this.removePlayerFromArray(receiver, proposedGame.unmatchedReceivers);
                }
            }
            )
            if (proposedGame.unmatchedReceivers.length < bestProposedGame.unmatchedReceivers.length) {
                this.copyGameInformation(proposedGame, bestProposedGame)
            }
            i--;
        }
        this.copyGameInformation(bestProposedGame, this.gameInformation)
    }

    findRandomReceiver(player: Player, unmatchedReceivers: Player[]): Player | null {
        let filteredReceivers = [...unmatchedReceivers]
            .filter((receiver) => receiver.familyGroup !== player.familyGroup)
        if (filteredReceivers.length > 0) {
            const randomRecieverIndex = Math.floor(Math.random() * (filteredReceivers.length))
            return filteredReceivers[randomRecieverIndex];
        } else {
            return null
        }
    }

    removePlayerFromArray(player: Player, playerArray: Player[]): Player[] {
        for (var i = 0; i < playerArray.length; i++) {
            if (playerArray[i].name === player.name && playerArray[i].familyGroup === player.familyGroup) {
                playerArray.splice(i, 1);
                break;
            }
        }
        return playerArray
    }

    copyGameInformation(originGame: GameInformation, destinationGame: GameInformation) {
        destinationGame.matchedPairs = [...originGame.matchedPairs];
        destinationGame.unmatchedGivers = [...originGame.unmatchedGivers];
        destinationGame.unmatchedReceivers = [...originGame.unmatchedReceivers];
    }

    initialiseTestData(){
        this.addPlayer('Andrew and Jess', 'Lawrence Family');
        this.addPlayer('Chris and Gretel', 'Lawrence Family');
        this.addPlayer('April', 'Lawrence Family');
        this.addPlayer('Kathy', 'Lawrence Family');
        this.addPlayer('Michael', 'Lawrence Family');
        this.addPlayer('John', 'John\'s Family');
        this.addPlayer('Bec', 'John\'s Family');
        this.addPlayer('Alex', 'John\'s Family');
        this.addPlayer('Francesca', 'John\'s Family');
        this.addPlayer('Mitchel', 'John\'s Family');
        this.addPlayer('Brian', 'Brian\'s Family');
        this.addPlayer('Ros', 'Brian\'s Family');
        this.addPlayer('Keiran', 'Brian\'s Family');
        this.addPlayer('Charlie', 'Brian\'s Family');
    }
}