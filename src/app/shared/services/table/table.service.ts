import {computed, Injectable, signal} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class TableService<T extends Record<string, any>> {
  private data = signal<T[]>([]);
  dataSource = computed(() => new MatTableDataSource<T>(this.data()));

  setDataSource(value: T[]) {
    this.data.set(value);
  }
}
