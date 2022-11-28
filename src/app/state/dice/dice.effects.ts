import { Injectable } from "@angular/core";
import { mergeMap, of } from "rxjs";
import { valueBetween1And6 } from "src/app/random";
import { roll, rollFailure, rollSuccess } from "./dice.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";


@Injectable()
export class DiceEffects {

    constructor(private actions$: Actions) {}

    roll$ = createEffect(() =>
        this.actions$.pipe(
            ofType(roll),
            mergeMap(() => {
                const dice = valueBetween1And6();
                if (dice) {
                    return of(rollSuccess({ dice }));
                } else {
                    return of(rollFailure({ error: "Error" }));
                }
            })
        )
    );
}

