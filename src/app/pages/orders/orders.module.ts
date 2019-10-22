import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  {
    path: "",
    component: OrdersComponent
  }
];

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class OrdersModule { }
