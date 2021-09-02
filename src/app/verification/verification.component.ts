import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { VerificationService } from '../verification.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor(private toastr: ToastrService,private userService: UserserviceService,private verificationService:VerificationService ) { }

  ngOnInit(): void {
    this.allUsers()
  }
  users: any = '';
  user: any = '';
  allUsers() {
    const userStr = localStorage.getItem('user');
    this.user = userStr != null ? JSON.parse(userStr) : null;
    console.log(this.user);
    this.userService.userLists().subscribe((res:any) => {
      console.log(res)
      this.users = res
    }
    ),((error:any) => console.error({ error: "error occured" }))
  }

  verify(email: string, status: any) {
    const userObj = {
      email: email,
      status: status
    }
    this.verificationService.acceptUser(userObj).subscribe((res:any) => this.toastr.success(res.infoMessage)),((err:any) => this.toastr.error(err.message))

  }
  reject(user: number) {
    this.verificationService.rejectUser(user).subscribe((res:any)=>this.toastr.success(res.infoMessage)),((error:any)=>this.toastr.error(error.message))
  }

}
