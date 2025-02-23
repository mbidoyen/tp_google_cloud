import {Component, inject} from '@angular/core';
import {AppTableComponent} from '../../../../shared/components/table/app-table/app-table.component';
import {FoodsBusiness} from '../../services/food-business';

@Component({
  selector: 'app-food-details',
  imports: [
    AppTableComponent
  ],
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.scss'
})
export class FoodDetailsComponent {
  protected readonly business = inject(FoodsBusiness);
}
