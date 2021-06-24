import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () => {
      const m = await import('./main/main.module');
      return m.MainModule;
    },
  },
  {
    path: '',
    loadChildren: async () => {
      const m = await import('./auth/auth.module');
      return m.AuthModule;
    },
  },
  {
    path: '',
    loadChildren: async () => {
      const m = await import('./cart/cart.module');
      return m.CartModule;
    },
  },
  {
    path: '',
    loadChildren: async () => {
      const m = await import('./detail-product/detail-product.module');
      return m.DetailProductModule;
    },
  },
  {
    path: '',
    loadChildren: async () => {
      const m = await import('./checkout/checkout.module');
      return m.CheckoutModule;
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
