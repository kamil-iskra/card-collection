import { Component } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-cards',
  template: `
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

export class CardsComponent implements OnInit {
  ngOnInit(): void {
    this.getCards();
  }
  
  selectedCard: Card;
  cards: Card[];

  constructor(private cardService: CardService) { }

  getCards(): void {
    this.cardService.getCards().then(cards => this.cards = cards);
  }

  onSelect(card: Card): void {
    this.selectedCard = card;
  }
};
