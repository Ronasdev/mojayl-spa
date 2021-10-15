import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  token:any;
  error = {
    password:null
  };
  message:any;
  wait:boolean = false

  constructor(private route: ActivatedRoute, private user:UserService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( param => {
      this.token = param.token;

    });
  }

  onSubmit(form:NgForm){
    this.wait=true;
    const password = form.value.password;
    const password_confirmation = form.value.password_confirmation;

    this.user.reset(this.token,password,password_confirmation).subscribe((res:any)=>{
      this.message = res.message;
      this.toastr.info(this.message,"Mise à jour");
      this.wait=false;
    },(err)=>{
      this.error = err.error.errors;
      this.wait=false;
    });
  }

}
