import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { AfterPaymentComponent } from './after-payment/after-payment.component';



@NgModule({
  declarations: [PaymentInfoComponent, AfterPaymentComponent],
  imports: [
    CommonModule
  ]
})
export class PaymentsModule { }
