import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Definition
const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home", loadChildren: "./pages/home/home.module#HomeModule"
  },
  {
    path: "login", loadChildren: "./pages/login/login.module#LoginModule"
  },
  {
    path: "sign-up", loadChildren: "./pages/registration/registration.module#RegistrationModule"
  },
  {
    path: "profile", loadChildren: "./pages/profile/profile.module#ProfileModule"
  },
  {
    path: "products", loadChildren: "./pages/products/products.module#ProductsModule"
  },
  {
    path: "orders", loadChildren: "./pages/orders/orders.module#OrdersModule"
  },
  {
    path: "cart", loadChildren: "./pages/cart/cart.module#CartModule"
  },
  {
    path: "payments", loadChildren: "./pages/payments/payments.module#PaymentsModule"
  },
  {
    path: "page-not-found", loadChildren: "./pages/page-not-found/page-not-found.module#PageNotFoundModule"
  },
  {
    path: "", redirectTo: "page-not-found"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
