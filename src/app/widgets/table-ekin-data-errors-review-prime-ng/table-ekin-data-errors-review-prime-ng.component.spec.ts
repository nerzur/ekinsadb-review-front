import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEkinDataErrorsReviewPrimeNgComponent } from './table-ekin-data-errors-review-prime-ng.component';

describe('TableEkinDataErrorsReviewPrimeNgComponent', () => {
  let component: TableEkinDataErrorsReviewPrimeNgComponent;
  let fixture: ComponentFixture<TableEkinDataErrorsReviewPrimeNgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableEkinDataErrorsReviewPrimeNgComponent]
    });
    fixture = TestBed.createComponent(TableEkinDataErrorsReviewPrimeNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
