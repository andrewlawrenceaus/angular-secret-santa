import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css']
})
export class PlayerItemComponent implements OnInit {

  @Input() player: string = '';
  @Output() deletePlayer = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeletePlayer() {
    this.deletePlayer.emit(this.player);
  }

}
