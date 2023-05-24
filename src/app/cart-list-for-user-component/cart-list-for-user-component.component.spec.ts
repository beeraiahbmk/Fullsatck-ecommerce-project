import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListForUserComponentComponent } from './cart-list-for-user-component.component';

describe('CartListForUserComponentComponent', () => {
  let component: CartListForUserComponentComponent;
  let fixture: ComponentFixture<CartListForUserComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartListForUserComponentComponent]
    });
    fixture = TestBed.createComponent(CartListForUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
