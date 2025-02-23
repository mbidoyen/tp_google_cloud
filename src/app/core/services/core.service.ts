import {Injectable, signal} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  drawer = signal<MatDrawer | undefined>(undefined);
  toggleDrawerState(): void {

    const drawer = this.drawer();
    if(drawer) {
      console.log(drawer);
      drawer.toggle();
    }
  }
}
