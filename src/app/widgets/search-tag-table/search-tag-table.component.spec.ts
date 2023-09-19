import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTagTableComponent } from './search-tag-table.component';

describe('SearchTagTableComponent', () => {
  let component: SearchTagTableComponent;
  let fixture: ComponentFixture<SearchTagTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTagTableComponent]
    });
    fixture = TestBed.createComponent(SearchTagTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
