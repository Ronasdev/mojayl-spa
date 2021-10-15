import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  error = {
    email:null
  };
  message:any;
  wait:boolean = false

  constructor(private user:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.wait=true;
    const email = form.value.email;
    this.user.forgot(email).subscribe((res:any)=>{
      this.message=res.message;
      this.wait=false;
    }, (err)=>{
     this. error= err.error.errors;
     this.wait=false;
    });
  }

}
