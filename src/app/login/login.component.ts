import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email: string = "";
  password: string = "";
  login() {
    if (this.email == "") {
      alert("Email cannot be empty");
    }
    else if (this.password == "") {
      alert("password cannot be empty");
    } else {
      alert("login successful");
      window.location.href = "initial-page"
    }
  }
}

