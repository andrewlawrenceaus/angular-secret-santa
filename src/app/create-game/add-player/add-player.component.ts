import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameManagementService } from 'src/app/shared/game-management.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm: FormGroup = new FormGroup('');

  constructor(private currentPlayersService: GameManagementService) { }

  ngOnInit(): void {
    this.playerForm = new FormGroup({
      'familyGroup': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    console.log(this.playerForm.value);
    this.currentPlayersService
      .addPlayer(this.playerForm.value.name, this.playerForm.value.familyGroup)
    this.playerForm.get('name')?.reset();  
  }

}
