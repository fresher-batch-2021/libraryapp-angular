import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  bookId: number;

  constructor(private route: ActivatedRoute) {
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
    const bookService= new BooksService();
    bookService.editBook(this.book._id,this.book).then(res => {
      console.log(res)
      window.location.href = "books"

    }).catch(err => alert("Enter the correct details"))
  }

  book: any;
  loadBook() {
    const bookService= new BooksService();
    bookService.getBookById(this.bookId).then(res => {
      console.log(res)
      this.book = res.data;

    }).catch(err => alert("Enter the correct details"))
  }
}

