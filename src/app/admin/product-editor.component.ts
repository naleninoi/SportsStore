import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-product-editor',
    templateUrl: 'product-editor.component.html'
})
export class ProductEditorComponent {
    editing = false;
    product: Product = new Product();

    constructor(
        private repository: ProductRepository,
        private router: Router,
        private activeRoute: ActivatedRoute
    ) {
        this.editing = this.activeRoute.snapshot.params['mode'] === 'edit';
        if (this.editing) {
            const productId = + this.activeRoute.snapshot.params['id'];
            const product = this.repository.getProduct(productId);
            Object.assign(this.product, product);
        }
    }

    save(form: NgForm) {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl('/admin/main/products');
    }

}
