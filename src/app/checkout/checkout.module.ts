import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutTableComponent } from './checkout-table/checkout-table.component';
import { ReadCheckoutComponent } from './read-checkout/read-checkout.component';


@NgModule({
  declarations: [
    CheckoutTableComponent,
    ReadCheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
