import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {
  cardActions = [
    { title: 'Waterfall', description: 'Everyone starts drinking at the same time. You can stop only when the player before you stops.' },
    { title: 'You', description: 'You decide who drinks.' },
    { title: 'Me', description: 'You drink.' },
    { title: 'Category', description: 'Pick a category (e.g., colors). Players must name items from that category in a round. The first who fails drinks.' },
    { title: 'Bust a jive', description: 'Start a dance move. The next player must repeat your move and add their own. This continues around the circle until someone fails and drinks.' },
    { title: 'Chicks', description: 'All players must name a female artist. The first who fails drinks.' },
    { title: 'Hearts', description: 'All players must name a male artist. The first who fails drinks.' },
    { title: 'Mate', description: 'Pick a mate. Whenever you drink, they drink too for the rest of the game.' },
    { title: 'Thumbmaster', description: 'At any time, put your thumb on the table. Last player to do so drinks.' },
    { title: 'Rhyme', description: 'Say a word. Players must go around in a circle rhyming with that word. The first who fails drinks.' },
    { title: 'Guys', description: 'All male players drink.' },
    { title: 'Gals', description: 'All female players drink.' },
    { title: 'Never have I ever...', description: 'Say something you have never done. Anyone who has done it drinks.' },
    { title: 'Rule', description: 'Make a rule that everyone must follow for the rest of the game. Anyone who breaks it drinks.' },
    { title: 'Heaven', description: 'Last player to raise their hand drinks.' },
    { title: 'Mate', description: 'Pick a mate. Whenever you drink, they drink too for the rest of the game.' },
  ];

  title = '';
  description = '';
  @Input() card: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    let cardNumber = +this.card.split('_')[1];
    this.title = this.cardActions[cardNumber - 1].title;
    this.description = this.cardActions[cardNumber - 1].description;
  }
}
