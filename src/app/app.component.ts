import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>My Cards</h2>
  <ul class="cards">
    <li *ngFor="let card of cards" (click)="onSelect(card)" [class.selected]="card === selectedCard">
      <span class="badge">{{card.id}}</span> {{card.name}}
    </li>
  </ul>
  <card-detail [card]="selectedCard"></card-detail>
  `,

  styles: [`
  .selected {
    background-color: #3a9fcc !important;
    color: white;
  }
  .cards {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .cards li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .cards li.selected:hover {
    background-color: #1f5096 !important;
    color: white;
  }
  .cards li:hover {
    color: white;
    background-color: #1f5096;
    left: .1em;
  }
  .cards .text {
    position: relative;
    top: -3px;
  }
  .cards .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #000000;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class AppComponent {
  title = 'Card collection app';
  selectedCard: Card;
  cards = CARDS;

  onSelect(card: Card): void {
    this.selectedCard = card;
  }
};

// Temporary objects array
const CARDS: Card[] = [
  { id: 11, name: 'card 1', content: 'CONTENT 1' },
  { id: 12, name: 'card 2', content: 'CONTENT 2' },
  { id: 13, name: 'card 3', content: 'CONTENT 3' },
  { id: 14, name: 'card 4', content: 'CONTENT 4' },
  { id: 15, name: 'card 5', content: 'CONTENT 5' },
  { id: 16, name: 'card 6', content: 'CONTENT 6' },
  { id: 17, name: 'card 7', content: 'CONTENT 7' },
  { id: 18, name: 'card 8', content: 'CONTENT 8' },
  { id: 19, name: 'card 9', content: 'CONTENT 9' },
  { id: 20, name: 'card 10', content: 'CONTENT 10' }
];