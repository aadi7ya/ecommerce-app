import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { OrdersComponent } from './orders.component';
import { OrdersListingComponent } from './orders-listing/orders-listing.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  {
    path: "",
    component: OrdersComponent
  }
];

@NgModule({
  declarations: [
    OrdersComponent,
    OrdersListingComponent,
    OrderDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class OrdersModule { }
