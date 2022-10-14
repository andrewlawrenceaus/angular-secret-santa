import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentPlayersService } from './current-players.service';

@Component({
  selector: 'app-current-players',
  templateUrl: './current-players.component.html',
  styleUrls: ['./current-players.component.css']
})
export class CurrentPlayersComponent implements OnInit {

  players: Map<string, string[]> = new Map<string, string[]>();
  subscription: Subscription = new Subscription;

  constructor(private currentPlayersService: CurrentPlayersService) { }

  ngOnInit(): void {
    this.subscription = this.currentPlayersService.initialPlayersMapChanged
      .subscribe(
        (players: Map<string, string[]>) => {
          this.players = players;
        }
      )
    this.players = this.currentPlayersService.getPlayers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
