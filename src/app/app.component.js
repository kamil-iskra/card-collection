"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var card_service_1 = require("./card.service");
var AppComponent = (function () {
    function AppComponent(cardService) {
        this.cardService = cardService;
        this.title = 'Card collection app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCards();
    };
    AppComponent.prototype.getCards = function () {
        this.cards = this.cardService.getCards();
    };
    AppComponent.prototype.onSelect = function (card) {
        this.selectedCard = card;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        providers: [card_service_1.CardService],
        selector: 'my-app',
        template: "\n  <h1>{{title}}</h1>\n  <h2>My Cards</h2>\n  <ul class=\"cards\">\n    <li *ngFor=\"let card of cards\" (click)=\"onSelect(card)\" [class.selected]=\"card === selectedCard\">\n      <span class=\"badge\">{{card.id}}</span> {{card.name}}\n    </li>\n  </ul>\n  <card-detail [card]=\"selectedCard\"></card-detail>\n  ",
        styles: ["\n  .selected {\n    background-color: #3a9fcc !important;\n    color: white;\n  }\n  .cards {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .cards li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .cards li.selected:hover {\n    background-color: #1f5096 !important;\n    color: white;\n  }\n  .cards li:hover {\n    color: white;\n    background-color: #1f5096;\n    left: .1em;\n  }\n  .cards .text {\n    position: relative;\n    top: -3px;\n  }\n  .cards .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #000000;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
    }),
    __metadata("design:paramtypes", [card_service_1.CardService])
], AppComponent);
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map