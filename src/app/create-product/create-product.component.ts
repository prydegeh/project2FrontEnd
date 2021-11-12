import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();
  submitted = false;

  constructor(private productService:ProductService,
    private router: Router) { }

  ngOnInit() {
  }

    createProduct(): void {
      this.submitted = false;
      this.product = new Product();
    }
  
    save() {
      this.productService.createProduct(this.product)
        .subscribe(data => console.log(data), error => console.log(error));
      this.product = new Product();
      this.gotoList();
    }
  
    onSubmit() {
      this.submitted = true;
      this.save();    
    }
  
    gotoList() {
      this.router.navigate(['/products']);
    }
}
