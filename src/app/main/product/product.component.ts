import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/IProduct';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/cart/cart.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];
  private userId!: any;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productData();
  }

  productData() {
    this.productService.getProduct().subscribe((response: any) => {
      this.products = response.data;
    });
  }

  addToCart(id: string) {
    const userId: any = localStorage.getItem('userId');
    this.cartService.addToCart(id, userId);
  }
}
