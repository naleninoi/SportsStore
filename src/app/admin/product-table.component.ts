import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
    selector: 'app-product-table',
    templateUrl: 'product-table.component.html'
})
export class ProductTableComponent {
    constructor(
        private repository: ProductRepository
    ) { }

    getProducts(): Product[] {
        return this.repository.getProducts();
    }

    deleteProduct(id: number): void {
        this.repository.deleteProduct(id);
    }

}
