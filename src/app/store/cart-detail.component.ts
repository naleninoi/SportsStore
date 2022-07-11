import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { ConnectionService } from '../model/connection.service';

@Component({
    selector: 'app-cart-detail',
    templateUrl: 'cart-detail.component.html'
})
export class CartDetailComponent {
    public connected = true;

    constructor(
        public cart: Cart,
        private connection: ConnectionService
    ) {
        this.connected = this.connection.connected;
        connection.changes.subscribe(state => this.connected = state);
    }
}
