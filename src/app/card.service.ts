import { Injectable } from '@angular/core';

import { Card } from './card';
import { CARDS } from './mock-cards';

@Injectable()
export class CardService {
    getCards(): Promise<Card[]> {
        return Promise.resolve(CARDS);
    } 

    getCard(id: number): Promise<Card> {
        return this.getCards()
                   .then(cards => cards.find(card => card.id === id));
      }

    getCardsSlowly(): Promise<Card[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getCards()), 2000);
        });
      }
}