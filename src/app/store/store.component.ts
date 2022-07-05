import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
    selector: 'app-store',
    templateUrl: 'store.component.html'
})
export class StoreComponent {
    public selectedCategory = null;

    constructor(
        private productRepository: ProductRepository) { }

    get products(): Product[] {
        return this.productRepository.getProducts(this.selectedCategory);
    }

    get categories(): string[] {
        return this.productRepository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }
}
