import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../book';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};


  constructor(private userService: UserserviceService) { }

  ngOnInit(): void {
    this.allUsers()
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
  users!: User[];
  user: any;
  allUsers() {
    const userStr = localStorage.getItem('user');
    this.user = userStr != null ? JSON.parse(userStr) : null;
    console.log(this.user);
    this.userService.usersLists().subscribe((res: any) => {
      this.dtTrigger.next();
      this.users = res.rows.map((obj: any) => obj.doc)
    }

    ), ((error: any) => console.error({ error: error.message }))
  }

}
