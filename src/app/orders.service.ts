import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }
  url = "https://libraryapp-node-api.herokuapp.com/order/all-orders"
allOrders(){
  return this.http.get(this.url)
}
}
