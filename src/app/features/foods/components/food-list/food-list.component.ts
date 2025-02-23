import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {CardFoodComponent} from '../card-food/card-food.component';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectFoodList, selectFoodsLoading} from '../../store/selectors/foods.selectors';
import {Foods} from '../../models';
import {AsyncPipe} from '@angular/common';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {foodsActions} from '../../store/actions/foods.group.actions';

@Component({
  selector: 'app-food-list',
  imports: [
    CardFoodComponent,
    AsyncPipe,
    MatProgressSpinner
  ],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss',
})
export class FoodListComponent implements OnInit{
  private store = inject(Store);
  foodList$: Observable<Foods> = this.store.select(selectFoodList);
  loading$:Observable<boolean> = this.store.select(selectFoodsLoading);

  ngOnInit(): void {
    this.store.dispatch(foodsActions.getAll());

    this.foodList$.subscribe(foods => {
      console.log('🛒 FoodList dans le composant:', foods);
    });

    this.loading$.subscribe(isLoading => {
      console.log('⏳ Loading:', isLoading);
    });
  }


}
