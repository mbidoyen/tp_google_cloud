import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FoodListComponent} from './features/foods/components/food-list/food-list.component';
import {HeaderComponent} from './core/components/header/header.component';
import {DrawerComponent} from './core/components/drawer/drawer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    DrawerComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'the-next-food';
}
