import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBooksDetailComponent } from './card-books-detail.component';

describe('CardBooksDetailComponent', () => {
  let component: CardBooksDetailComponent;
  let fixture: ComponentFixture<CardBooksDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBooksDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBooksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
