import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGenerateGame(){
    this.router.navigate(['../generated-game']);
  }

}
