import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {

  constructor( private orderService:OrdersService) { }

  ngOnInit(): void {
    this.allOrders();
  }
  orders: any;
  allOrders() {
  
  this.orderService.getAllOrders().subscribe((res:any) => {
        this.orders = res.rows.map((obj:any)=>obj)
        console.log(this.orders)
      }),((error:any) => console.error(error))
  }

}

