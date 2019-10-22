import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { ListingComponent } from './listing/listing.component';
import { DetailsComponent } from './details/details.component';
import { PlacementComponent } from './placement/placement.component';



@NgModule({
  declarations: [OrdersComponent, ListingComponent, DetailsComponent, PlacementComponent],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
