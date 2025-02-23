import {AfterViewInit, Component, inject, input, Input, InputSignal, signal, ViewChild} from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable, MatTableDataSource
} from '@angular/material/table';
import {MatSort, MatSortHeader} from '@angular/material/sort';
import {SearchTableInputComponent} from '../search-table-input/search-table-input.component';
import {FilterTableButtonComponent} from '../filter-table-button/filter-table-button.component';
import {TableService} from '../../../services/table/table.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  imports: [
    MatTable,
    MatSort,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatSortHeader,
    SearchTableInputComponent,
    FilterTableButtonComponent
  ],
  templateUrl: './app-table.component.html',
  styleUrl: './app-table.component.scss'
})
export class AppTableComponent<T extends Record<string, any>> implements AfterViewInit {
  private readonly tableService = inject(TableService);
  protected columns = signal<string[]>([]);
  protected dataSource = this.tableService.dataSource;
  searchable = input<boolean>(false, { alias: 'searchable'});

  @ViewChild(MatSort) sort!: MatSort;
  columnToFilter = input<string[]>();

  @Input() set data(value: T[]) {
    if (value.length > 0) {
      this.columns.set(Object.keys(value[0]));
      this.tableService.setDataSource(value);
      console.log(this.dataSource);
    } else {
      this.columns.set([]);
      this.tableService.setDataSource([]);
    }
  }

  ngAfterViewInit(): void {
    this.dataSource().sort = this.sort;
  }
}
