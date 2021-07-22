import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartTableComponent } from './cart-table/cart-table.component';
import { ReadCartComponent } from './read-cart/read-cart.component';
import { ComponentsSharedModule } from 'src/app/shared/components-shared/components-shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CartTableComponent, ReadCartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    ComponentsSharedModule,
    HttpClientModule,
  ],
})
export class CartModule {}
