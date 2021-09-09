import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookdaoService } from './bookdao.service';
import { environment } from 'src/environments/environment';
import { OrdersService } from './orders.service';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseUrl: string;
  dbName: string;
  book!: Book;

  constructor(private http: HttpClient, private bookService: BookdaoService, private orderService: OrdersService) {
    this.dbName = environment.dbUsername
    this.baseUrl = environment.baseUrl;
  }
  collectionName = 'libraryapp_books';
  addBook(Obj: any) {
    return this.bookService.save(this.collectionName, Obj)
  }
  allBooks() {
    return this.bookService.findAll(this.collectionName)
  }
  getBookById(id: any) {
    return this.bookService.findOne(this.collectionName, id)
  }
  editBook(bookObj: any) {

    return this.bookService.updateBook(this.collectionName, bookObj)
  }
  updateBookStatus(bookObj: any) {
    return this.bookService.updateBook(this.collectionName, bookObj)
  }
  // deleteBook(bookid: number) {
  //   return this.http.delete(this.url + `/delete/${bookid}`)
  // }
  deleteBook(bookObj: Book) {
    return this.bookService.deleteOne(this.collectionName, bookObj);

  }
  findBookByName(bookObj: Book) {
    return this.bookService.findBook(this.collectionName, bookObj)
  }
}
