import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from '../orders.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private toastr: ToastrService,private bookService : BooksService, private orderService: OrdersService,private router:Router) { 
    console.log("Books component");
  }

  ngOnInit(): void {
    this.allBooks();
  }
  books: any;
  searchResults: any;
  bookName: string = "";
  allBooks() {
  
  this.bookService.allBooks().subscribe((res:any) => {
      this.books =res.docs;//.map((obj:any) => obj.doc);
      console.log(this.books)
      this.searchResults = this.books;
    }),((err:any )=> { this.toastr.error(err) })
  }
  updateBookStatus(book: any,status:any) {
    const bookObj={book,status:status}
    this.bookService.updateBookStatus(bookObj).subscribe((res:any) => {
      console.log(res)
     this.router.navigate(["books"]);
    })

  }
  deleteBook(book: any) {

    //1. check whether book is taken ?
    this.orderService.bookTaken(book).subscribe( (res:any)=>{
      let data = res.docs;
      console.log(data)
      if(data.length != 0){
        this.toastr.warning("Book is Taken. You cannot delete it ")
      }
      else{
        this.bookService.deleteBook(book).subscribe((res:any) => { 
           this.toastr.success("Successfully Deleted") ;
           setTimeout(() => {
            this.router.navigate(["books"]);
          },2000);
        },
        ((err:any)=>{
          console.error(err);
          this.toastr.error("Error  - Unable to delete");
        }));

      }
    })
    
  }

  search() {
    if(this.bookName==null||this.bookName.trim()==''){
      this.toastr.error("Enter the Book name")
    }else{
      console.log("Search", this.bookName);
      this.searchResults = this.books.filter((obj: any) => obj.bookName.toLowerCase().indexOf(this.bookName.toLowerCase()) != -1);
    }
   

  }

  clearSearch() {
    this.searchResults = this.books;
  }
}
