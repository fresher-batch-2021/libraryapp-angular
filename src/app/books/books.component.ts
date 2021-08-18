import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.allBooks();
  }
  books: any;
  searchResults:any;

  bookName:string = "";

  allBooks() {
    let i = 1;
    const url = "https://libraryapp-node-api.herokuapp.com/book/get-all-books";
    axios.post(url).then(res => {
      console.log(res.data)
      this.books = res.data;
      this.searchResults = this.books;
    })
      .catch(err => { alert(err.data) })
  }
  updateBookStatus(book: any, status: string) {
    const bookObj = { status: status };
    const url = "https://libraryapp-node-api.herokuapp.com/book/update-book-status/" + book._id;
    axios.put(url, bookObj).then(res =>
      {console.log(res.data)
    window.location.href = "books";
      })

  }
  deleteBook(book: any) {
    const url = "https://libraryapp-node-api.herokuapp.com/book/delete-book/" + book._id;
    axios.delete(url).then(res => {console.log(res.data),alert('book deleted')})
  }

  search(){
    console.log("Search" , this.bookName);
    this.searchResults = this.books.filter( (obj:any)=> obj.bookName.toLowerCase().indexOf(this.bookName.toLowerCase()) !=-1);
    
  }

  clearSearch(){
    this.searchResults  = this.books;
  }
}
