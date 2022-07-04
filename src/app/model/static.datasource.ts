import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { from, Observable } from 'rxjs';

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100),
        new Product(2, 'Product 2', 'Category 1', 'Product 2 (Category 1)', 200),
        new Product(3, 'Product 3', 'Category 2', 'Product 3 (Category 2)', 300),
        new Product(4, 'Product 4', 'Category 2', 'Product 4 (Category 2)', 400),
        new Product(5, 'Product 5', 'Category 3', 'Product 5 (Category 3)', 500),
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
}
