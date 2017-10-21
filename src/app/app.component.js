"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Card collection app';
        this.card = {
            id: 1,
            name: 'My card',
            content: 'coooooontent content content'
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{title}}</h1>\n  <h2>{{card.name}} details!</h2>\n  <div>\n    <label>id: </label>\n    {{card.id}}\n  </div>\n  <div>\n    <label>name: </label>\n    <input [(ngModel)]=\"card.name\" placeholder=\"name\">\n  </div>\n  <div>\n    <label>content: </label>\n    {{card.content}}\n  </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Card = (function () {
    function Card() {
    }
    return Card;
}());
exports.Card = Card;
//# sourceMappingURL=app.component.js.map