import { createReducer, on } from '@ngrx/store';
import { increment, decrement, multiply, divide, reset } from './contador.actions';

export const initialState = 20;

const _counterReducer = createReducer(initialState,
  on(increment, state             => state + 1),
  on(decrement, state             => state - 1),
  on(multiply , (state, {numero}) => state * numero),
  on(divide   , (state, {numero}) => state / numero),
  on(reset    , ()                => 0)
);

export function contadorReducer(state, action) {
  return _counterReducer(state, action);
}
