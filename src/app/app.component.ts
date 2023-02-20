import { Component, OnInit } from '@angular/core';
import { selectDiceError } from './state/dice/dice.selectors';
import { selectDiceValue } from './state/dice/dice.selectors';
import { Store } from '@ngrx/store';
import { roll} from './state/dice/dice.actions';
import { AppState } from './state/app.state';
import { selectAllPosts, selectEntitiesPosts, selectTotalPosts, selectIdsPosts, selectError } from './state/post/post.selector';
import { loadPosts } from './state/post/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    // random number beteen 1 and 6
    value$ = this.appStore.select(selectDiceValue);
    error$ = this.appStore.select(selectDiceError);

    // posts
    posts$ = this.appStore.select(selectAllPosts);
    postsError$ = this.appStore.select(selectError);

  constructor(private appStore: Store<AppState>) {}

  updateValue() {
    this.appStore.dispatch(roll());
  }

  ngOnInit() {
    this.appStore.dispatch(loadPosts());
  }

  title = 'haddley-ngrx';

}
