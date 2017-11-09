import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardService } from './card.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    CardsComponent,
    CardDetailComponent,
    DashboardComponent
  ],
  providers: [ CardService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
