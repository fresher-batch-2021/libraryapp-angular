import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService : BooksService) { }

  ngOnInit(): void {
    this.allBooks();
  }
  books: any;
  searchResults: any;
  bookName: string = "";
  allBooks() {
  
  this.bookService.allBooks().then(res => {
      console.log(res.data)
      this.books = res.data;
      this.searchResults = this.books;
    })
      .catch(err => { alert(err.data) })
  }
  updateBookStatus(book: any, status: string) {
    const bookObj = { status: status };
    this.bookService.updateBookStatus(book._id,bookObj).then(res => {
      console.log(res.data)
      window.location.href = "books";
    })

  }
  deleteBook(book: any) {
    this.bookService.deleteBook(book._id).then(res => { console.log(res.data), alert(res.data),window.location.href='books' }).catch(err=>alert(err.message))
  }

  search() {
    if(this.bookName==null||this.bookName.trim()==''){
      alert("Enter the Book name")
    }else{
      console.log("Search", this.bookName);
      this.searchResults = this.books.filter((obj: any) => obj.bookName.toLowerCase().indexOf(this.bookName.toLowerCase()) != -1);
    }
   

  }

  clearSearch() {
    this.searchResults = this.books;
  }
}
