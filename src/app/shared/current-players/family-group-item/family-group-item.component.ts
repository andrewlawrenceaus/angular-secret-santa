import { Component, Input, OnInit } from '@angular/core';
import { CurrentPlayersService } from '../current-players.service';

@Component({
  selector: 'app-family-group-item',
  templateUrl: './family-group-item.component.html',
  styleUrls: ['./family-group-item.component.css']
})
export class FamilyGroupItemComponent implements OnInit {

  @Input() players: string[] = [];
  @Input() familyGroup: string = '';

  constructor(private currentPlayersService: CurrentPlayersService) { }

  ngOnInit(): void {
  }

  deletePlayer(playerName: string) {
    this.currentPlayersService.removePlayer(playerName, this.familyGroup);
  }

}
