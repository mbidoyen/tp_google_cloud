import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import {FoodApi} from '../../services/FoodApi';
import {foodsActions} from '../actions/foods.group.actions';
import {catchError, exhaustMap, map, of, tap} from 'rxjs';

export const foodsGetAll$ = createEffect(
  (actions$ = inject(Actions), foodService = inject(FoodApi)) => {
    return actions$.pipe(
      ofType(foodsActions.getAll),
      tap(() => console.log('tap')),
      exhaustMap(() =>
        foodService.getAllFoods().pipe(
          tap(() => console.log('tap')),
          map((foods) => foodsActions.getAllSuccess({foods})),
          catchError((error) => of(foodsActions.getAllFailure({ error })))
        )
      )
    );
  },
  { functional: true }
);

