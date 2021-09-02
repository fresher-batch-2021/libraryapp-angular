import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
  url = "https://libraryapp-node-api.herokuapp.com/book";

  allBooks() {
    console.log('hi')
    return this.http.get(this.url + "/get-all-books")
  }
  addBook(book: any) {
    return this.http.post(this.url + `/add-book`, book)
  }
  updateBookStatus(bookid: number, bookObj: any) {
    return this.http.put(this.url + `/update-book-status/${bookid}`, bookObj)
  }
  deleteBook(bookid: number) {
    return this.http.delete(this.url + `/delete/${bookid}`)
  }
  getBookById(bookid: number) {
    return this.http.get(this.url + `/get-book-by-id/${bookid}`)
  }
  editBook(bookid: number, book: any) {
    return this.http.put(this.url + `/update-book/${bookid}`, book)
  }
}
