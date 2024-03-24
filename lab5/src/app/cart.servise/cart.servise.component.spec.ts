import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartServiseComponent } from './cart.servise.component';

describe('CartServiseComponent', () => {
  let component: CartServiseComponent;
  let fixture: ComponentFixture<CartServiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartServiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartServiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
