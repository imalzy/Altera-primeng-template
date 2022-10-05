import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { ProductComponent } from './product/product.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { OrderComponent } from './order/order.component';
import { NgPrimeModule } from 'src/app/shared/ngprime.module';


@NgModule({
  declarations: [
    ProductComponent,
    CategoryProductComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    ECommerceRoutingModule
  ]
})
export class ECommerceModule { }
