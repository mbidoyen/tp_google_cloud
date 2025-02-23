import {foodsEffects, ordersEffects, usersEffects} from './features/foods/store/effects/import.foods.effect';


export const appEffects = {
  ...foodsEffects,
  ...usersEffects,
  ...ordersEffects
};

