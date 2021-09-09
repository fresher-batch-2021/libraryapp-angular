import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';
import { Order } from '../order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orderreport',
  templateUrl: './orderreport.component.html',
  styleUrls: ['./orderreport.component.css']
})
export class OrderreportComponent implements OnInit {

  constructor(private orderService: OrdersService, private bookService: BooksService) {
    this.allOrders()

  }

  ngOnInit(): void {
  }
  order!: Order[];
  book!: Book[];
  books: any = [];
  count: any = [];
  orders: any = [];

  myType: any = 'BarChart';
  PieChart: any = 'PieChart';
  pointSize: any = 30;
  myDatas: any = [
  ];


  allOrders() {


    this.orderService.getAllOrders().subscribe((res: any) => {
      console.log(res)
      this.order = res.rows.map((obj: any) => obj.doc)
      this.allBooks()
      console.log(this.order)
    })
  }
  allBooks() {

    this.bookService.allBooks().subscribe((res: any) => {
      this.book = res.docs;
      for (let bookObj of this.book) {
        this.books.push(bookObj.bookName)
      }
      console.log(this.books)
      this.orderCount()
    })
  }
  orderCount() {
    for (let bookcount of this.books) {
      let orderCount = this.order.filter((obj: any) => obj.book.bookTitle == bookcount)
      this.count.push(orderCount.length)
    }

    console.log(this.count)
    this.makeArray();
  }
  makeArray() {
    let l = this.books.length;

    for (let i = 0; i < l; i++) {
      let array: any = [];
      array.push(this.books[i]);
      array.push(this.count[i]);
      this.myDatas.push(array)
    }
  }
}
