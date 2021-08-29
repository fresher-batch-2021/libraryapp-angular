import { Injectable } from '@angular/core';
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }
  url = "https://libraryapp-node-api.herokuapp.com/order/all-orders"
allOrders(){
  return axios.get(this.url)
}
}
