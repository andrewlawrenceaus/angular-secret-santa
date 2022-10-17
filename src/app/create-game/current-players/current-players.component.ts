import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameManagementService } from '../../shared/game-management.service';

@Component({
  selector: 'app-current-players',
  templateUrl: './current-players.component.html',
  styleUrls: ['./current-players.component.css']
})
export class CurrentPlayersComponent implements OnInit {

  players: Map<string, string[]> = new Map<string, string[]>();
  subscription: Subscription = new Subscription;

  constructor(private gameManagementService: GameManagementService) { }

  ngOnInit(): void {
    this.subscription = this.gameManagementService.initialPlayersMapChanged
      .subscribe(
        (players: Map<string, string[]>) => {
          this.players = players;
        }
      )
    this.players = this.gameManagementService.getPlayers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
