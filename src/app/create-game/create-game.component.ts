import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameManagementService } from '../shared/game-management.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  constructor(private router: Router, private gameManagementService: GameManagementService) { }

  ngOnInit(): void {
  }

  onGenerateGame(){
    this.gameManagementService.generateGame();
    this.router.navigate(['../generated-game']);
  }

}
