import { Injectable } from '@angular/core';
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  url = "https://libraryapp-node-api.herokuapp.com/book";

  allBooks() {
    console.log('hi')
    return axios.post(this.url + "/get-all-books")
  }
  addBook(book: any) {
    return axios.post(this.url + `/add-book`, book)
  }
  updateBookStatus(bookid: number, bookObj: any) {
    return axios.put(this.url + `/update-book-status/${bookid}`, bookObj)
  }
  deleteBook(bookid: number) {
    return axios.delete(this.url + `/delete/${bookid}`)
  }
  getBookById(bookid: number) {
    return axios.get(this.url + `/get-book-by-id/${bookid}`)
  }
  editBook(bookid: number, book: any) {
    return axios.put(this.url + `/update-book/${bookid}`, book)
  }
}
