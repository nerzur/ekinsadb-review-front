import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLotesWithErrorsComponent } from './card-lotes-with-errors.component';

describe('CardLotesWithErrorsComponent', () => {
  let component: CardLotesWithErrorsComponent;
  let fixture: ComponentFixture<CardLotesWithErrorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLotesWithErrorsComponent]
    });
    fixture = TestBed.createComponent(CardLotesWithErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
