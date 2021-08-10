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
  books:any;

  allBooks(){
   let i=1;
  const url="http://localhost:8000/book/get-all-books";
  axios.post(url).then(res=> {
    console.log(res.data)
    this.books = res.data;
  })
  .catch(err=>{alert(err.data)})
}
}
