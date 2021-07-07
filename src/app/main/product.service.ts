import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { IProduct } from '../shared/interfaces/IProduct';

const apiURL: string = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduct(): any {
    return this.http.get<IProduct[]>(`${apiURL}/product/allproduct`);
  }
}
