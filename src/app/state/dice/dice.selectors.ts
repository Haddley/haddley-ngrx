import { AppState } from "../app.state";
import { createSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";
import { DiceState } from "./dice.state";

export const selectDice = (state: AppState) => state.dice;

export const selectDiceValue: MemoizedSelector<AppState, number, DefaultProjectorFn<number>> = createSelector(
    selectDice,
    (state: DiceState) => state.value
);

export const selectDiceError: MemoizedSelector<AppState, string | null, DefaultProjectorFn<string | null>> = createSelector(
    selectDice,
    (state: DiceState) => state.error
);
