import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from './card';
import { CardService } from './card.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'card-detail',
  template: `
  <div *ngIf="card">
    <h2>{{card.name}} details!</h2>
    <div>
        <label>id: </label>
        {{card.id}}
    </div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="card.name" placeholder="name">
    </div>
    <div>
        <label>content: </label>
        {{card.content}}
    </div>
    </div>`
})
export class CardDetailComponent implements OnInit {
    @Input() card: Card;

    ngOnInit(): void {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.cardService.getCard(+params.get('id')))
        .subscribe(card => this.card = card);
    }
    constructor(
        private cardService: CardService,
        private route: ActivatedRoute,
        private location: Location
      ) {}

}