import {Component, inject} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {CoreService} from '../../services/core.service';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly coreService = inject(CoreService);

  openDrawer() {
    this.coreService.toggleDrawerState()
  }
}
