import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-mobile',
  templateUrl: './reset-mobile.component.html',
  styleUrls: ['./reset-mobile.component.scss']
})


export class ResetMobileComponent implements OnInit {

  message:any ='';
  error:any ='';
  wait:boolean =false;

  constructor(private userService: UserService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  reset(form:any){
    this.wait =true;
    const formData ={
      password: form.value.password,
      mobile: form.value.mobile
    };
    this.userService.resetMobile(formData).subscribe(
        (res:any)=>{
            this.message = res.message;
            this.toastr.success(this.message,"Mise à jour");
            this.wait =false;
            this.router.navigate(['home']);
        },
        (err:any)=>{
          this.error = err.error.error;
          console.log(err.error);

          this.wait =false;
        }
    );
  }

}
