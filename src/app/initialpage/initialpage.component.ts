import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-initialpage',
  templateUrl: './initialpage.component.html',
  styleUrls: ['./initialpage.component.css']
})
export class InitialpageComponent implements OnInit {

  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
    this.allBooks();
  }

  books: any;
  userStr: any;
  allBooks() {
    const userStr = localStorage.getItem("user");
    const data = userStr != null ? JSON.parse(userStr) : [];
    console.log(data);
    this.bookService.allBooks().then(res => {
      console.log(res.data)
      this.books = res.data;
    })
      .catch(err => { alert(err.data) })
  }
}

