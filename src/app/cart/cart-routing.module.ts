import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadCartComponent } from './read-cart/read-cart.component';

const routes: Routes = [{ path: 'cart', component: ReadCartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
