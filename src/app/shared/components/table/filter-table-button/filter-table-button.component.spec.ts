import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTableButtonComponent } from './filter-table-button.component';

describe('FilterTableButtonComponent', () => {
  let component: FilterTableButtonComponent;
  let fixture: ComponentFixture<FilterTableButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterTableButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
