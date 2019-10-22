import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { AfterPaymentComponent } from './after-payment/after-payment.component';

const routes: Routes = [
  {
    path: "info",
    component: PaymentInfoComponent
  },
  {
    path: "success",
    component: AfterPaymentComponent
  },
  {
    path: "failure",
    component: AfterPaymentComponent
  }
];

@NgModule({
  declarations: [
    PaymentInfoComponent,
    AfterPaymentComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PaymentsModule { }
