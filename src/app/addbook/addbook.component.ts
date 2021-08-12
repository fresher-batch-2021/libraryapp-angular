import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  bookName: string = "";
  authorName: string = "";
  quantity: string = "";
  price: string = "";
  category: string = "";
  image: string = "";
  description:string="";
  createdby:any;
  addBook() {
    const userStr = localStorage.getItem("user");
    if(userStr == null){
      alert("Please Login");
      //redirect
    }
    
    const loggedInUser =userStr != null ? JSON.parse(userStr): null ;
    const createdby=loggedInUser.user_id
    console.log(createdby);
    if (this.bookName == null || this.bookName == "") {
      alert("Enter the BookName");
    }
    else if (this.authorName == null || this.authorName == "") {
      alert("Enter the authorname");
    }
    else if (this.quantity == null || this.quantity == "") {
      alert("Enter the quantity");
    }
    else if (this.price == null || this.price == "") {
      alert("Enter the price of the book");
    }
    else if (this.category == null || this.category == "") {
      alert("Enter the category of the book");
    }
    else if (this.description == null || this.description == "") {
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
      "description":this.description,
      "createdby":createdby
    }
    console.log(JSON.stringify(details));

    const url = ('http://localhost:8000/book/add-book');
    axios.post(url, details).then(res => {
      console.log(res.data)
      alert(res.data)
    }).catch(err => alert("Enter the correct details"))
  }
}
}
