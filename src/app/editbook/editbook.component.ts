import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router'

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  bookId: number;

  constructor(private toastr: ToastrService,private route: ActivatedRoute,private bookService:BooksService,private router:Router) {
    this.bookId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.loadBook();
  }
  bookName: string = "";
  authorName: string = "";
  price: string = "";
  category: string = "";
  image: string = "";
  description: string = "";
  editBook() {
    console.log(this.bookId);
    this.bookService.editBook(this.book).subscribe((res:any) => {
      console.log(this.book)
      console.log(res)
      this.toastr.success('updated book')
      this.router.navigate(["books"]);

    }),((err:any) =>  this.toastr.error("Enter the correct details"))
  }

  book: any;
  loadBook() {
    console.log(this.bookId)
    this.bookService.getBookById(this.bookId).subscribe((res:any) => {
      console.log(res)
      this.book = res;
    }),((err:any) =>  this.toastr.error("book not found"))
  }
}

