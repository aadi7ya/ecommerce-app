import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /**
   * Constructor
   * @param http [HttpClient] http client call implementation obj
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Fetch Products Http Call
   * @param data [Array] data to be sent with the fetch request
   * @return [Observable]
   */
  getProducts(data: any) {
    let url = environment.baseURI +"5dc043ca31000011d3be3fc8";
    return this.http.get(url, data);
  }
}
