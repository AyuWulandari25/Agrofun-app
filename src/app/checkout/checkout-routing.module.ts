import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadCartComponent } from '../cart/read-cart/read-cart.component';
import { ReadCheckoutComponent } from './read-checkout/read-checkout.component';

const routes: Routes = [{ path: 'checkout', component: ReadCheckoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
