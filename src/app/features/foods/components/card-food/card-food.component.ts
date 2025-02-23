import {Component, input} from '@angular/core';
import {Food} from '../../models';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from '@angular/material/card';
import {MatAnchor, MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-card-food',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatIcon,
    RouterLink
  ],
  templateUrl: './card-food.component.html',
  styleUrl: './card-food.component.scss',
})
export class CardFoodComponent {
  readonly item = input.required<Food>()
}
