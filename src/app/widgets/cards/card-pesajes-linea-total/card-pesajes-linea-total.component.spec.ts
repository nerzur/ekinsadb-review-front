import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPesajesLineaTotalComponent } from './card-pesajes-linea-total.component';

describe('CardPesajesLineaTotalComponent', () => {
  let component: CardPesajesLineaTotalComponent;
  let fixture: ComponentFixture<CardPesajesLineaTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPesajesLineaTotalComponent]
    });
    fixture = TestBed.createComponent(CardPesajesLineaTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
