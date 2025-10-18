import { Component } from '@angular/core';
import { NgStyle, NgForOf, NgIf } from '@angular/common';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgStyle, NgForOf, NgIf],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  game: Game = new Game();
  pickCardAnimation = false;

  ngOnInit(): void {
    this.newGame();
  }

  takeCard() {
    this.pickCardAnimation = true;
  }

  newGame() {
    this.game = new Game();
    console.log('New game started', this.game);
  }
}
