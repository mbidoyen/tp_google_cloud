import {computed, inject, Injectable} from '@angular/core';
import {FoodApi} from './FoodApi';
import {toSignal} from '@angular/core/rxjs-interop';
import {BehaviorSubject, finalize} from 'rxjs';
import {FoodStore} from '../store/food.store';

@Injectable({ providedIn: 'root' })
export class FoodsBusiness {
  private readonly store = inject(FoodStore);
  
  private readonly foodApi = inject(FoodApi);
  private isLoadingSubject = new BehaviorSubject<boolean>(true);

  private foodsResources = toSignal(this.foodApi.getAllFoods().pipe(finalize(() => {
    this.isLoadingSubject.next(false);
  })), { initialValue: []});

  items = computed(() => this.foodsResources());
  isLoading = toSignal(this.isLoadingSubject.asObservable(), { initialValue: true });
}
