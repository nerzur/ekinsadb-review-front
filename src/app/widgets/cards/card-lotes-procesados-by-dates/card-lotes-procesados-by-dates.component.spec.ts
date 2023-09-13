import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLotesProcesadosByDatesComponent } from './card-lotes-procesados-by-dates.component';

describe('CardLotesProcesadosByDatesComponent', () => {
  let component: CardLotesProcesadosByDatesComponent;
  let fixture: ComponentFixture<CardLotesProcesadosByDatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLotesProcesadosByDatesComponent]
    });
    fixture = TestBed.createComponent(CardLotesProcesadosByDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
