import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  
  bookId: any;
  action:string;
  book: any;


  constructor(private toastr: ToastrService, private route: ActivatedRoute, private bookService: BooksService) {
    this.bookId = this.route.snapshot.params["id"];
    this.action = this.route.snapshot.params["action"];

  }
  ngOnInit(): void {
    this.loadBook();
   
  }
  loadBook() {
    console.log(this.bookId)
    this.bookService.getBookById(this.bookId).subscribe((res: any) => {
      this.book = res;
      console.log(res);
    })}

  afterBookUpdate(event:any){
    console.log(event);
    this.toastr.success("Child Component Updated");
  }
}
