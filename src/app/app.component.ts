import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
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
  `
})
export class AppComponent  { 
  title = 'Card collection app';
  card: Card = {
    id: 1,
    name: 'My card',
    content: 'coooooontent content content'
  }; 
}

export class Card {
  id: number;
  name: string;
  content: string;
}