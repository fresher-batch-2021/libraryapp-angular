import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = "";
  email: string = "";
  password: string = "";
  register() {
    if (this.name == null || this.name == "") {
      alert("Name cannot be empty");
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email)) {
      alert('Invalid Email');
    } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(this.password)) {
      alert("password must have upercase lowercase and number")
    }
    else {
      let url = "http://localhost:8000/users/addUser";
      let userData = { 
        name: this.name,
        email: this.email,
        password: this.password
      }
      axios.post(url, userData).then(res=>{
        const data = res.data;
        console.log(data);
        alert("Success");
        window.location.href = "login";
      }).catch(err=>{
        console.error(err.response.data);
        let errorMessage = err.response.data.errorMessage;
        alert("Error:" + errorMessage);
      });
      
    }
  }
}
