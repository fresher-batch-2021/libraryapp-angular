import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Order } from '../order';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.allOrders();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
  order!: Order[];
  allOrders() {


    this.orderService.getAllOrders().subscribe((res: any) => {
      console.log(res)
      this.order = res.rows.map((obj: any) => obj.doc)
      this.dtTrigger.next();

      console.log(this.order)
    })
  }

}

