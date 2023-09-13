import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardErrorsInTagByDatesComponent } from './card-errors-in-tag-by-dates.component';

describe('CardErrorsInTagByDatesComponent', () => {
  let component: CardErrorsInTagByDatesComponent;
  let fixture: ComponentFixture<CardErrorsInTagByDatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardErrorsInTagByDatesComponent]
    });
    fixture = TestBed.createComponent(CardErrorsInTagByDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
