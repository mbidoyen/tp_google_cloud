import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {foods, Foods} from '../models';

@Injectable({ providedIn: 'root' })
export class FoodApi {
  getAllFoods():Observable<Foods> {
    console.log('Appel de la méthode')
    return of(foods);
  }
}
