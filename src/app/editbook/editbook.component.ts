import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import { Book } from '../book';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {


  @Output() updateEvent = new EventEmitter<any>();

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private bookService: BooksService, private router: Router) {
  }

  ngOnInit(): void {
  }

  editBook() {
    console.log(this.book._id);
    this.bookService.editBook(this.book).subscribe((res: any) => {
      console.log(this.book)
      console.log(res)
      this.toastr.success('updated book')
      this.updateEvent.emit("Updated");
    //  this.router.navigate(["books"]);

    }, ((err: any) => this.toastr.error("Enter the correct details")));
  }

  @Input()
  book!: Book;

}

