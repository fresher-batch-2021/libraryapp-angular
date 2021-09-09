import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Order } from '../order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  bookId: any;
  orderData: any;


  constructor(private route: ActivatedRoute, private orderService: OrdersService) {
    this.bookId = this.route.parent?.snapshot.params["id"];

  }
  ngOnInit(): void {
    this.orderDetails();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
  orderDetails() {
    console.log(this.bookId)
    this.orderService.findBookByid(this.bookId).subscribe((res: any) => {
      this.orderData = res.docs
      console.log(res.docs)
      this.dtTrigger.next();

    }
    )
  }

}
