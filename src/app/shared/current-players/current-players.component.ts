import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentPlayersService } from './current-players.service';

@Component({
  selector: 'app-current-players',
  templateUrl: './current-players.component.html',
  styleUrls: ['./current-players.component.css']
})
export class CurrentPlayersComponent implements OnInit {

  players: string[] = [];
  subscription: Subscription = new Subscription;

  constructor(private currentPlayersService: CurrentPlayersService) { }

  ngOnInit(): void {
    this.subscription = this.currentPlayersService.playersChanged
      .subscribe(
        (players: string[]) => {
          this.players = players;
        }
      )
    this.players = this.currentPlayersService.getPlayers();
    console.log(this.players)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
