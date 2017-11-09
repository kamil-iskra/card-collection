"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_cards_1 = require("./mock-cards");
var of_1 = require("rxjs/observable/of");
var CardService = (function () {
    function CardService() {
    }
    CardService.prototype.getCards = function () {
        return Promise.resolve(mock_cards_1.CARDS);
    };
    CardService.prototype.getCard = function (id) {
        // Todo: send the message _after_ fetching the hero
        //this.messageService.add(`CardService: fetched card id=${id}`);
        return of_1.of(mock_cards_1.CARDS.find(function (card) { return card.id === id; }));
    };
    CardService.prototype.getCardsSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getCards()); }, 2000);
        });
    };
    return CardService;
}());
CardService = __decorate([
    core_1.Injectable()
], CardService);
exports.CardService = CardService;
//# sourceMappingURL=card.service.js.map