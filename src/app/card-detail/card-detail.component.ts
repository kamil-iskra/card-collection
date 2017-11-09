import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from '../card';
import { CardService } from '../card.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'card-detail',
  templateUrl: './card-detail.component.html',
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

      goBack(): void {
        this.location.back();
      }
}