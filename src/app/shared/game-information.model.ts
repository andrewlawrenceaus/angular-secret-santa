import { PlayerPair } from "./player-pair.model";
import { Player } from "./player.model";

export class GameInformation {
    public matchedPairs: PlayerPair[];
    public unmatchedGivers: Player[];
    public unmatchedReceivers: Player[];

    constructor(matchedPairs: PlayerPair[], unmatchedGivers: Player[], unmatchedReceivers: Player[]){
        this.matchedPairs = matchedPairs;
        this.unmatchedGivers = unmatchedGivers;
        this.unmatchedReceivers = unmatchedReceivers
    }
}
  