import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // Declare Prerequisites
  public products: any;
  public fetchProductsLoader: boolean;

  /**
   * @param productsService [ProductsService] instance of class ProductsService
   */
  constructor(private productsService: ProductsService) {
    console.log("Component consturcted");
  }

  /**
   * LC hook initializes when component inits
   */
  ngOnInit() {
    // call method to fetch products
    this.fetchProducts();
  }

  /**
   * Fetch Products from Server
   */
  fetchProducts() {
    // Initialize a loader
    this.fetchProductsLoader = true;

    // Init Params
    let params = {};

    // Subscribe to Service get products
    this.productsService.getProducts(params).subscribe(
      (data: any) => {
        this.products = data;

        // Dismiss the loader
        this.fetchProductsLoader = false;
      },
      (err: any) => {
        console.log(err);
        this.products = [];

        // Dismiss the loader
        this.fetchProductsLoader = false;
      }
    );
  }

}
