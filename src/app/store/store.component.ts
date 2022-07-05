import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
    selector: 'app-store',
    templateUrl: 'store.component.html'
})
export class StoreComponent {
    public selectedCategory = null;
    public productsPerPage = 4;
    public selectedPage = 1;

    constructor(
        private productRepository: ProductRepository) { }

    get products(): Product[] {
        const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.productRepository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.productRepository.getCategories();
    }

    get pageCount(): number {
        const selectedProductsQty = this.productRepository.getProducts(this.selectedCategory).length;
        return Math.ceil(selectedProductsQty / this.productsPerPage);
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: string) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }
}
