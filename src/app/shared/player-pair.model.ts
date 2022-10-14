import { Player } from "./player.model";

export class PlayerPair {
    public giver: Player;
    public receiver: Player;
  
    constructor(giver: Player, receiver: Player) {
      this.giver = giver;
      this.receiver = receiver;
    }
  }
  