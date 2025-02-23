import {createFeature} from '@ngrx/store';
import {foodsReducers} from '../reducers/foods.reducers';

export const foodsFeature = createFeature({
  name: 'foods',
  reducer: foodsReducers,
});


export const anotherFeature = createFeature({
  name: 'foods',
  reducer: foodsReducers,
});
