import { Component, OnInit } from '@angular/core';
import { GameManagementService } from 'src/app/shared/game-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isGameGenerated = false;

  constructor(private gameManagementService: GameManagementService) { }

  ngOnInit(): void {
    this.gameManagementService.gameGeneratedChanged.subscribe((isGameGenerated) => {
      this.isGameGenerated = isGameGenerated;
    })
  }

}
