import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productData();
  }

  productData() {
    this.productService.getProduct().subscribe((response: any) => {
      this.products = response.data;
    });
  }
}
