import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CurrentPlayersService } from '../shared/current-players/current-players.service';
import { GameInformation } from '../shared/game-information.model';

@Component({
  selector: 'app-generated-game',
  templateUrl: './generated-game.component.html',
  styleUrls: ['./generated-game.component.css']
})
export class GeneratedGameComponent implements OnInit {
  gameInformation: GameInformation | undefined;
  subscription: Subscription = new Subscription;

  constructor(private router: Router, private currentPlayersService: CurrentPlayersService) { }

  ngOnInit(): void {
    this.currentPlayersService.generateGame();
    this.subscription = this.currentPlayersService.gameInformationChanged
      .subscribe(
        (gameInformation: GameInformation) => {
          this.gameInformation = gameInformation;
        }
      )
    this.gameInformation = this.currentPlayersService.getGameInformation();
    console.log(this.gameInformation)
  }

  onModifyPlayers(){
    this.router.navigate(['../create-game']);
  }

  onRegenerateGame(){
    this.currentPlayersService.generateGame();
  }
}
