import {signalStore, withState} from '@ngrx/signals';
import {foodsInitialState} from './models/state';
export const FoodStore = signalStore(
  { providedIn:'root'},
  withState(foodsInitialState)
);
