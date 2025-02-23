import { Routes } from '@angular/router';
import {FoodDetailsComponent} from './features/foods/components/food-details/food-details.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {FoodListComponent} from './features/foods/components/food-list/food-list.component';
import {AppTableComponent} from './shared/components/table/app-table/app-table.component';

export const routes: Routes = [
  {
    path: 'home', component: FoodListComponent
  },
  {
    path: 'carte', component: FoodDetailsComponent
  },
  {
    path: 'food/:id', component: FoodDetailsComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];
