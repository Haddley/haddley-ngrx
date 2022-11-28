import { TestBed } from '@angular/core/testing';
import { MemoizedSelector } from '@ngrx/store';
import { AppComponent } from './app.component';
import { DiceState } from './state/dice/dice.state';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from './state/app.state';
import { selectDiceValue } from './state/dice/dice.selectors';

describe('AppComponent', () => {

  let mockStore: MockStore<AppState>;
  let value: MemoizedSelector<DiceState, number>;
  const initialState: AppState = { dice: { value: 1, error: null } };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    mockStore = TestBed.inject(MockStore);
    value = mockStore.overrideSelector(selectDiceValue, 1);

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'haddley-ngrx'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('haddley-ngrx');
  });

  it('should render number between 1 and 6', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.dice')?.textContent).toBeGreaterThanOrEqual(1);
    expect(compiled.querySelector('.dice')?.textContent).toBeLessThanOrEqual(6);
  });
});
