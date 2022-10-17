import { PlayerPair } from "./player-pair.model";
import { Player } from "./player.model";

export class GameInformation {
    public matchedPairs: PlayerPair[] = [];
    public unmatchedGivers: Player[] = [];
    public unmatchedReceivers: Player[] = [];

    constructor(){
    }
}
  