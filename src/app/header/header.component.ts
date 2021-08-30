import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isLoggedIn = false;
  ngOnInit(): void {
    this.userDetails();
  }
  user:any;
  userDetails(){
    const userStr=localStorage.getItem('user');
    this.user = userStr != null ? JSON.parse(userStr) : null;
    if(this.user ){
      this.isLoggedIn = true;
    }
  }
  logout(){
   localStorage.removeItem('user');
    window.location.href="login"
  }
}
