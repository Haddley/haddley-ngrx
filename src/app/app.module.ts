import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { DiceEffects } from './state/dice/dice.effects';
import { diceReducer } from './state/dice/dice.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({dice: diceReducer}),
    EffectsModule.forRoot([DiceEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
