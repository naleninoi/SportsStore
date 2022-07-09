import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];
    private loaded = false;

    constructor(
        private dataSource: RestDataSource
    ) { }

    getOrders(): Order[] {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }

    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders().subscribe(orders => this.orders = orders);
    }

    saveOrder(order: Order): Observable<Order> {
        this.orders.push(order);
        return this.dataSource.saveOrder(order);
    }

    updateOrder(order: Order) {
        this.dataSource.updateOrder(order).subscribe(updatedOrder => {
            this.orders.splice(this.orders.
            findIndex(o => o.id === updatedOrder.id), 1, updatedOrder);
        });
    }

    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id).subscribe(() => {
            this.orders.splice(this.orders.findIndex(o => id === o.id), 1);
        });
    }

}
