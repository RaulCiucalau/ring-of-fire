import { Component } from '@angular/core';
import { NgStyle, NgForOf, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    NgStyle, 
    NgForOf, 
    NgIf, 
    MatButtonModule, 
    MatIconModule, 
    PlayerComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard = '';
  game: Game = new Game();

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      const card = this.game.stack.pop();
      if (card) {
        this.currentCard = card;
        this.pickCardAnimation = true;

        setTimeout(() => {
          this.game.playedCards.push(this.currentCard);
          this.pickCardAnimation = false;
        }, 1000);
      }
    }

  }

  newGame() {
    this.game = new Game();
    console.log('New game started', this.game);
  }
}
