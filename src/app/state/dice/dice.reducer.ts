import { createReducer,on } from "@ngrx/store";
import { roll, rollSuccess, rollFailure } from "./dice.actions";
import { DiceState } from "./dice.state";
import { valueBetween1And6 } from "../../random";

export const initialState: DiceState = {
    value: valueBetween1And6(),
    error: null
};

export const diceReducer = createReducer(
    initialState,
    on(roll, state => ({ ...state, error: null })),
    on(rollSuccess, (state, { dice }) => ({ ...state, value: dice })),
    on(rollFailure, (state, { error }) => ({ ...state, error }))
);