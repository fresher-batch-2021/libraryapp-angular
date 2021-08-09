import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
books=[
  {
    id:1,bookname:"book1",authorname:"author1",category:"category1",price:"100",quantity:"10"  },
    {
      id:1,bookname:"book1",authorname:"author1",category:"category1",price:"100",quantity:"10"  },
      {
        id:1,bookname:"book1",authorname:"author1",category:"category1",price:"100",quantity:"10"  }
]
}
