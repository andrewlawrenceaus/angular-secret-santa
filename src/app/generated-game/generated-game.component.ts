import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameManagementService } from '../shared/game-management.service';
import { GameInformation } from '../shared/game-information.model';

@Component({
  selector: 'app-generated-game',
  templateUrl: './generated-game.component.html',
  styleUrls: ['./generated-game.component.css']
})
export class GeneratedGameComponent implements OnInit {
  gameInformation: GameInformation | undefined;
  subscription: Subscription = new Subscription;

  constructor(private router: Router, private gameManagementService: GameManagementService) { }

  ngOnInit(): void {
    this.gameManagementService.generateGame();
    this.subscription = this.gameManagementService.gameInformationChanged
      .subscribe(
        (gameInformation: GameInformation) => {
          this.gameInformation = gameInformation;
        }
      )
    this.gameInformation = this.gameManagementService.getGameInformation();
    console.log(this.gameInformation)
  }

  onModifyPlayers(){
    this.router.navigate(['../create-game']);
  }

  onRegenerateGame(){
    this.gameManagementService.generateGame();
  }
}
