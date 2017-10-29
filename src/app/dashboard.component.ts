import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    
    cards: Card[] = [];

    constructor(private cardService: CardService){}
    
    ngOnInit(): void {
        this.cardService.getCards().then(cards => this.cards = cards.slice(0, 3));
    }

}