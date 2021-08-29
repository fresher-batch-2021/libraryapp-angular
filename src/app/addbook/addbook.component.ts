import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { BooksService } from '../books.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor( private bookService:BooksService) { }

  ngOnInit(): void {
  }
  bookName: string = "";
  authorName: string = "";
  quantity:any;
  price:any;
  category: string = "";
  image: string = "";
  description: string = "";
  createdby: any;
  addBook() {
    const userStr = localStorage.getItem("user");
    if (userStr == null) {
      alert("Please Login");
    }

    const loggedInUser = userStr != null ? JSON.parse(userStr) : null;
    const createdby = loggedInUser.user_id
    console.log(createdby);
    if (this.bookName == null || this.bookName == ""||this.bookName.trim()=='') {
      alert("Enter the BookName");
    }
    else if (this.authorName == null || this.authorName == ""||this.authorName.trim()=='') {
      alert("Enter the authorname");
    }
    else if (this.quantity == null) {
      alert("Enter the quantity");
    }
    else if (this.price == null) {
      alert("Enter the price of the book");
    }
    else if (this.category == null || this.category == ""||this.category.trim()=='') {
      alert("Enter the category of the book");
    }
    else if (this.description == null || this.description == ""||this.description.trim()=='') {
      alert("Enter the description of the book");
    }
    else {

      const details = {
        "bookName": this.bookName,
        "authorName": this.authorName,
        "quantity": this.quantity,
        "price": this.price,
        "category": this.category,
        "image": this.image,
        "description": this.description,
        "createdby": createdby
      }
      console.log(JSON.stringify(details));
      this.bookService.addBook(details).then(res => {
        alert("book added successfully")
        window.location.href = "books"
      }).catch(err => alert({ err: err.response }))
    }
  }

}
