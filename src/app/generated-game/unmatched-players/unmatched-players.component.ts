import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/player.model';

@Component({
  selector: 'app-unmatched-players',
  templateUrl: './unmatched-players.component.html',
  styleUrls: ['./unmatched-players.component.css']
})
export class UnmatchedPlayersComponent implements OnInit {

  @Input() title: string = '';
  @Input() players: Player[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
