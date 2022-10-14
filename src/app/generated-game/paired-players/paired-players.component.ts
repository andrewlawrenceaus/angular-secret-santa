import { Component, Input, OnInit } from '@angular/core';
import { PlayerPair } from 'src/app/shared/player-pair.model';

@Component({
  selector: 'app-paired-players',
  templateUrl: './paired-players.component.html',
  styleUrls: ['./paired-players.component.css']
})
export class PairedPlayersComponent implements OnInit {
  @Input() pairedPlayers: PlayerPair[] | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.pairedPlayers)
  }

}
