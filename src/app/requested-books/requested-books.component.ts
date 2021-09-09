import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../book';
import { RequestbooksService } from '../requestbooks.service';
@Component({
  selector: 'app-requested-books',
  templateUrl: './requested-books.component.html',
  styleUrls: ['./requested-books.component.css']
})
export class RequestedBooksComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private requestBooksService: RequestbooksService) { }

  ngOnInit(): void {
    this.allRequests();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
  book!: Book[];
  userName: any;
  allRequests() {
    this.requestBooksService.allRequests().subscribe((res: any) => {
      this.book = res.rows.map((e: any) => e.doc)
      this.dtTrigger.next();

      console.log(this.book)
    })
  }
}
