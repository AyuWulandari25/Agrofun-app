import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ReadMainComponent } from './read-main/read-main.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { ComponentsSharedModule } from 'src/app/shared/components-shared/components-shared.module';

@NgModule({
  declarations: [ReadMainComponent, BannerComponent, ProductComponent],
  imports: [CommonModule, MainRoutingModule, ComponentsSharedModule],
})
export class MainModule {}
