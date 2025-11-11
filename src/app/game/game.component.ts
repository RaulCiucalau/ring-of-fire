import { Component } from '@angular/core';
import { NgStyle, NgForOf, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from "../game-info/game-info.component";
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    NgStyle,
    NgForOf,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    PlayerComponent,
    GameInfoComponent,
    MatIcon
],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard = '';
  game: Game = new Game();

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.newGame();
  }

  takeCard() {
    if (this.game.players.length < 2) {
      this.snackBar.open('Please add at least 2 players to start the game!', 'OK', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
    }
    
    if (!this.pickCardAnimation) {
      const card = this.game.stack.pop();
      if (card) {
        this.currentCard = card;
        this.pickCardAnimation = true;

        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
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
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      this.game.players.push(name);
    });
  }

}
