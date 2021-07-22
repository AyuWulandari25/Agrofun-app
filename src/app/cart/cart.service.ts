import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ICart } from '../shared/interfaces/ICart';

const apiURL: string = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private userId!: any;
  private token!: any;
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    this.userId = localStorage.getItem('userId');
    this.token = localStorage.getItem('token');
  }

  getUserId() {
    return this.userId;
  }

  getToken() {
    return this.token;
  }

  addToCart(id: string, userId: string) {
    return this.http
      .post<ICart[]>(`${apiURL}/cart/add/${id}`, { userId })
      .subscribe(
        (response: any) => {
          if (response.message === 'Success add to new cart!') {
            Swal.fire('Success', 'Added this product to Cart..', 'success');
          }
          setTimeout(() => window.location.reload(), 1000);
        },
        (error) => {
          if (error.message) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You must login',
            });
            this.router.navigate(['/login']);
          }
        }
      );
  }

  getCart(): any {
    return this.http.get<ICart[]>(`${apiURL}/cart/getall`);
  }

  deleteCart(id: string): any {
    return this.http.delete<ICart[]>(`${apiURL}/cart/delete/${id}`);
  }
}
