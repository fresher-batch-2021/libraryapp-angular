import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastr: ToastrService,
    private userService:UserserviceService
    ) {

  }

  ngOnInit(): void {
  }
  email: string = "";
  password: string = "";
  login() {
    if (this.email == "") {
        this.toastr.error("Email cannot be empty");
    }
    else if (this.password == "") {
        this.toastr.error("Enter  The Password");
    } else {
      let userData = {
        email: this.email,
        password: this.password
      }
      console.log(userData)
      this.userService.login(userData).subscribe((res:any) => {
        let user = res
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user)
        if (user.userData.userRole === 'admin') {
          this.toastr.success(res.message);
          window.location.href = 'initial-page'
        }
      }),((err:any) => {
        this.toastr.error("Invalid email or password");
      })
    }
  }
}

