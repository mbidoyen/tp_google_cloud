import {Component, computed, inject, signal, ViewEncapsulation} from '@angular/core';
import {MatFormField, MatInput, MatPrefix, MatSuffix} from '@angular/material/input';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableService} from '../../../services/table/table.service';

@Component({
  selector: 'app-search-table-input',
  imports: [
    MatInput,
    MatFormField,
    MatSuffix,
    MatIconButton,
    MatIcon,
    ReactiveFormsModule,
    FormsModule,
    MatPrefix,
  ],
  templateUrl: './search-table-input.component.html',
  styleUrl: './search-table-input.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SearchTableInputComponent<T extends Record<string, any>> {
  private readonly tableService = inject(TableService);
  protected inputValue = signal<string>('');
  protected dataSource = computed(() => this.tableService.dataSource());
  private timeout: ReturnType<typeof setTimeout> | null = null;
  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value.trim().toLowerCase();
    this.inputValue.set(filterValue);

    if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.dataSource().filter = filterValue;
    }, 300);
  }
}
