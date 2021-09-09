import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router'
import { Subject } from 'rxjs';
import { Book } from '../book';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private toastr: ToastrService, private bookService: BooksService, private orderService: OrdersService, private router: Router, private spinner: NgxSpinnerService) {
    console.log("Books component");
  }

  ngOnInit(): void {
    this.allBooks();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.spinner.show();

  }
  book!: Book[];
  searchResults: string = '';
  bookName: string = "";
  allBooks() {

    this.bookService.allBooks().subscribe((res: any) => {
      this.book = res.docs;
      console.log(this.book)
      this.dtTrigger.next();

        setTimeout(() => {
          this.spinner.hide();
        }, 1000)


    }), ((err: any) => { this.toastr.error(err) })
  }
  updateBookStatus(book: Book, status: string) {
    const bookObj = { book, status: status }
    this.bookService.updateBookStatus(bookObj).subscribe((res: any) => {
      console.log(res)
      this.router.navigate(["books"]);
    })

  }
  deleteBook(book: Book) {

    //1. check whether book is taken ?
    this.orderService.bookTaken(book).subscribe((res: any) => {
      let data = res.docs;
      console.log(data)
      if (data.length != 0) {
        this.toastr.warning("Book is Taken. You cannot delete it ")
      }
      else {
        this.bookService.deleteBook(book).subscribe((res: any) => {
          this.toastr.success("Successfully Deleted");
          setTimeout(() => {
            this.router.navigate(["home-page"]);
          }, 2000);
        },((err: any) => {
            this.toastr.error("Error  - Unable to delete");
          }));

      }
    })

  }

}
