import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { OrderdaoService } from './orderdao.service';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  book!:Book[]
  constructor(private http: HttpClient, private orderDao: OrderdaoService) { }
  collectionName = "libraryapp_orders";


  getAllOrders() {
    return this.orderDao.findAll(this.collectionName);
  }

  bookTaken(book: Book) {
    return this.orderDao.isBookTaken(this.collectionName, book)

  }
  findBookByid(id:any) {
    console.log(id)
    return this.orderDao.findBook(this.collectionName,id)
  }

}
