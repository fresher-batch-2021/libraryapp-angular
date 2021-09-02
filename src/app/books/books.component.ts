import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private toastr: ToastrService,private bookService : BooksService) { }

  ngOnInit(): void {
    this.allBooks();
  }
  books: any;
  searchResults: any;
  bookName: string = "";
  allBooks() {
  
  this.bookService.allBooks().subscribe((res:any) => {
      this.books = res;
      this.searchResults = this.books;
    }),((err:any )=> { this.toastr.error(err) })
  }
  updateBookStatus(book: any, status: string) {
    const bookObj = { status: status };
    this.bookService.updateBookStatus(book._id,bookObj).subscribe((res:any) => {
      console.log(res)
      window.location.href = "books";
    })

  }
  deleteBook(book: any) {
    this.bookService.deleteBook(book._id).subscribe((res:any) => {  this.toastr.success(res.infoMessage) }),((err:any)=>this.toastr.error(err.message))
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
