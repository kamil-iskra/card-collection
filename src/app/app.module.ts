import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { CardsComponent } from './cards.component';
import { CardDetailComponent } from './card-detail.component';
import { DashboardComponent } from './dashboard.component';
import { CardService } from './card.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component:CardDetailComponent
      },
    ])
  ],
  declarations: [ 
    AppComponent,
    CardsComponent,
    CardDetailComponent,
    DashboardComponent
  ],
  providers: [
    CardService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
