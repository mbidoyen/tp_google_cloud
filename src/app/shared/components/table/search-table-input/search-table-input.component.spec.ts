import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTableInputComponent } from './search-table-input.component';

describe('SearchTableInputComponent', () => {
  let component: SearchTableInputComponent;
  let fixture: ComponentFixture<SearchTableInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTableInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
