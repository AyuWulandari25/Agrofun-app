import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailProductRoutingModule } from './detail-product-routing.module';
import { ReadDetailComponent } from './read-detail/read-detail.component';


@NgModule({
  declarations: [
    ReadDetailComponent
  ],
  imports: [
    CommonModule,
    DetailProductRoutingModule
  ]
})
export class DetailProductModule { }
