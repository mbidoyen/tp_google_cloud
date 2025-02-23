import {Food} from '../../models';

export interface FoodState {
  foods: Food[];
  isLoading: boolean;
}

export const foodsInitialState: FoodState = {
  foods: [],
  isLoading: true,
}

export default FoodState;
