import {Component, computed, inject, input, Signal, signal, viewChild} from '@angular/core';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatListOption, MatSelectionList} from '@angular/material/list';
import {TableService} from '../../../services/table/table.service';
import {MatMenu, MatMenuTrigger} from '@angular/material/menu';
import {SearchTableInputComponent} from '../search-table-input/search-table-input.component';

@Component({
  selector: 'app-filter-table-button',
  imports: [
    MatIconButton,
    MatIcon,
    MatSelectionList,
    MatListOption,
    MatMenu,
    MatMenuTrigger,
    MatButton
  ],
  templateUrl: './filter-table-button.component.html',
  styleUrl: './filter-table-button.component.scss'
})
export class FilterTableButtonComponent {
  private readonly tableService = inject(TableService);
  readonly columnToFilter = input.required<string>()
  private dataSource = computed(() => this.tableService.dataSource());
  private timeout: ReturnType<typeof setTimeout> | null = null;
  protected checkboxValues:Signal<any> = computed(() => this.setCheckboxValues());
  private matSelectionList = viewChild<MatSelectionList>("values");

  private setCheckboxValues(){
    const column = this.columnToFilter();
    return Array.from(new Set(
      this.dataSource().data
        .map(item => item[column])
        .filter(Boolean)))
      .sort((a:number | string, b:number | string) => {
        return this.sortData(a, b)
      });
  }

  protected preventMenuClose(event: MouseEvent) {
    event.stopPropagation();
  }

  private sortData(a:number | string, b:number | string){
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
      return a.localeCompare(b);
    }

    return 0;
  }

  protected onSelectionChange(event: MouseEvent) {
    this.preventMenuClose(event);
    if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      const selectedValues:any[] = this.matSelectionList()?.selectedOptions.selected.map(option => option.value) || [];
      if (!selectedValues?.length) {
        selectedValues.push(...this.checkboxValues());
      }
      this.filteringDataSource(selectedValues)
    }, 300);
  }
  private filteringDataSource(selectedValues:any[]){
    this.dataSource().filterPredicate = (data) => {
      return selectedValues.includes(data[this.columnToFilter()]);
    };
    this.dataSource().filter = Math.random().toString();
  }

  protected clearFilter() {
    this.matSelectionList()?.selectedOptions.clear()
  }
}
