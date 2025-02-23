import {createFeatureSelector, createSelector} from '@ngrx/store';
import FoodState from '../models/state';

export const selectFoodsState = createFeatureSelector<FoodState>('foods');

export const selectFoodList = createSelector(
  selectFoodsState,
  (state: FoodState) => state.foods
);

export const selectFoodsLoading = createSelector(
  selectFoodsState,
  (state: FoodState) => state.isLoading
)
