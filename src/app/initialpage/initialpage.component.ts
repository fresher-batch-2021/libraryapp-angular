import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initialpage',
  templateUrl: './initialpage.component.html',
  styleUrls: ['./initialpage.component.css']
})
export class InitialpageComponent implements OnInit {

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
