import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/shared/interfaces/ICart';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css'],
})
export class CartTableComponent implements OnInit {
  cart: ICart[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartData();
  }

  cartData(): any {
    this.cartService.getCart().subscribe((response: any) => {
      this.cart = response.data;
    });
  }

  onDelete(id: string): any {
    this.cartService.deleteCart(id).subscribe((response: any) => {
      if (response.success) {
        Swal.fire('Berhasil', 'Berhasil delete data brand..', 'success');
      }
    });
  }
}
