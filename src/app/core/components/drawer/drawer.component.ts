import {Component, inject, OnInit, viewChild} from '@angular/core';
import {MatDrawer, MatDrawerContainer} from '@angular/material/sidenav';
import {RouterLink} from '@angular/router';
import {CoreService} from '../../services/core.service';
import {MatList, MatListItem} from '@angular/material/list';

@Component({
  selector: 'app-drawer',
  imports: [
    MatDrawerContainer,
    MatDrawer,
    RouterLink,
    MatList,
    MatListItem
  ],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent implements OnInit{
  private readonly coreService = inject(CoreService);
  drawer = viewChild<MatDrawer>('drawer');

  ngOnInit(): void {
    this.coreService.drawer.set(this.drawer());
  }

  readonly menu = [
    {
      title: 'Home',
      link: '/home'
    },
    {
      title: 'Carte',
      link: '/carte'
    },
    {
      title: 'Contact',
      link: '/contact'
    },
    {
      title: 'About',
      link: '/about'
    }
  ]


}
