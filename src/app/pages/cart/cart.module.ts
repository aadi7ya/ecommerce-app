import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CartComponent } from './cart.component';

const routes: Routes = [
  {
    path: "",
    component: CartComponent
  }
];

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CartModule { }
