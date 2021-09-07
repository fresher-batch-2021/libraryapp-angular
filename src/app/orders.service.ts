import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderdaoService } from './orderdao.service';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient, private orderDao: OrderdaoService) { }
  collectionName = "libraryapp_orders";


  getAllOrders() {
    return this.orderDao.findAll(this.collectionName);
  }

  bookTaken(book: any) {
    return this.orderDao.isBookTaken(this.collectionName, book)

  }

}
