import { Component } from '@angular/core';
import { selectDiceError } from './state/dice/dice.selectors';
import { selectDiceValue } from './state/dice/dice.selectors';
import { Store } from '@ngrx/store';
import { roll} from './state/dice/dice.actions';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    // random number beteen 1 and 6
    value$ = this.store.select(selectDiceValue);
    error$ = this.store.select(selectDiceError);

  constructor(private store: Store<AppState>) {}

  updateValue() {
    this.store.dispatch(roll());
  }

  title = 'haddley-ngrx';

}
