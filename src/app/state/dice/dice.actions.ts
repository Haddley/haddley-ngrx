import { createAction, props } from '@ngrx/store';

export const roll = createAction('[Dice] Roll');

export const rollSuccess = createAction('[Dice] Roll Success', props<{ dice: number }>());
export const rollFailure = createAction('[Dice] Roll Failure', props<{ error: string }>());

