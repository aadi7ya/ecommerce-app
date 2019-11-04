import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // Declare Prerequisites
  public products: any;

  constructor() {
    console.log("Component consturcted");
  }

  ngOnInit() {
    console.log("this has initialized: ngoninit");
    this.products = [
      { "name": "Shirt", "size": "xxl" },
      { "name": "T-Shirt", "size": "med" },
      { "name": "Y-Shirt", "size": "xl" },
      { "name": "Jock Shirt", "size": "xl" },
      { "name": "Party Shirt", "size": "xl" },
      { "name": "Shirt", "size": "med" },
      { "name": "Shirt", "size": "xl" },
      { "name": "T-Shirt", "size": "xl" },
      { "name": "Y-Shirt", "size": "xl" },
      { "name": "Jock Shirt", "size": "med" },
      { "name": "Party Shirt", "size": "xl" },
      { "name": "Shirt", "size": "xl" },
      { "name": "Shirt", "size": "xl" },
      { "name": "T-Shirt", "size": "xl" },
      { "name": "Y-Shirt", "size": "xl" },
      { "name": "Jock Shirt", "size": "xl" },
      { "name": "Party Shirt", "size": "med" }
    ];
  }

}
