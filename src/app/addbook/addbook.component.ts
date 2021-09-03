import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router'

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private toastr: ToastrService, private bookService:BooksService,private router:Router) { }

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
     this.toastr.error("Please Login");
    }

    const loggedInUser = userStr != null ? JSON.parse(userStr) : null;
    const createdby = loggedInUser.user_id
    console.log(createdby);
    if (this.bookName == null || this.bookName == ""||this.bookName.trim()=='') {
     this.toastr.error("Enter the BookName");
    }
    else if (this.authorName == null || this.authorName == ""||this.authorName.trim()=='') {
     this.toastr.error("Enter the authorname");
    }
    else if (this.quantity == null) {
     this.toastr.error("Enter the quantity");
    }
    else if (this.price == null) {
     this.toastr.error("Enter the price of the book");
    }
    else if (this.category == null || this.category == ""||this.category.trim()=='') {
     this.toastr.error("Enter the category of the book");
    }
    else if (this.description == null || this.description == ""||this.description.trim()=='') {
     this.toastr.error("Enter the description of the book");
    }
    else {

      const bookDetails = {
        "bookName": this.bookName,
        "authorName": this.authorName,
        "quantity": this.quantity,
        "price": this.price,
        "category": this.category,
        "image": this.image,
        "description": this.description,
        "createdby": createdby,
        "status":"Active"

      }
      this.bookService.findBookByName(bookDetails).subscribe((res:any)=>{console.log(res.docs)
      const isExists=res.docs.length
      console.log(isExists)
      if(isExists===0){
      this.bookService.addBook(bookDetails).subscribe((res:any) => {
        console.log(res)
       this.toastr.success("book added successfully")
        this.router.navigate(["books"]);
        return false
      }),((err:any) =>this.toastr.error(err.response))
      }else{
        this.toastr.warning("Book Already Exists")
      }
      })
      console.log(JSON.stringify(bookDetails));
      
    }
  }

}
