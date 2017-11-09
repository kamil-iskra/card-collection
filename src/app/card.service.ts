import { Injectable } from '@angular/core';

import { Card } from './card';
import { CARDS } from './mock-cards';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CardService {
    getCards(): Promise<Card[]> {
        return Promise.resolve(CARDS);
    } 


      getCard(id: number): Observable<Card> {
        // Todo: send the message _after_ fetching the hero
        //this.messageService.add(`CardService: fetched card id=${id}`);
        return of(CARDS.find(card => card.id === id));
      }
      
    getCardsSlowly(): Promise<Card[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getCards()), 2000);
        });
      }
}