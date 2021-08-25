import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.allUsers()
  }
  users:any='';
  user:any='';
  allUsers(){
    const userStr=localStorage.getItem('user');
    this.user = userStr != null ? JSON.parse(userStr) : null;
    console.log(this.user);
    const url = "https://libraryapp-node-api.herokuapp.com/users/get-all-users";
    axios.get(url)
    .then(res=>
      {console.log(res.data)
    this.users=res.data
      }
    )
    .catch(error=>console.error({error:error.message}))
  }

}
