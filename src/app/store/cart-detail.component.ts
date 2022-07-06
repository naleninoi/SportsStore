import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
    selector: 'app-cart-detail',
    templateUrl: 'cart-detail.component.html'
})
export class CartDetailComponent {
    constructor(
        public cart: Cart
    ) { }
}
