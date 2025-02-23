import {createReducer, on} from '@ngrx/store';
import {foodsInitialState} from '../models/state';
import {foodsActions} from '../actions/foods.group.actions';

export const foodsReducers = createReducer(
  foodsInitialState,
  on(foodsActions.getAll, state => {
    console.log('Reducer - loadFoods exécuté');
    return { ...state, isLoading: true };
  }),
  on(foodsActions.getAllSuccess, (state, { foods }) => {
    console.log('Reducer - loadFoodsSuccess exécuté', foods);
    return { ...state, foods: foods, isLoading: false };
  }),
  on(foodsActions.getAllFailure, state => {
    console.log('Reducer - loadFoodsFailure exécuté');
    return { ...state, isLoading: false };
  })
);

