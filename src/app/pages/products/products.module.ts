import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: "info",
    component: ProductsComponent
  }
]


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProductsModule { }
