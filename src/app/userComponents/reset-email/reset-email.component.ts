import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-email',
  templateUrl: './reset-email.component.html',
  styleUrls: ['./reset-email.component.scss']
})
export class ResetEmailComponent implements OnInit {

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
      email: form.value.email
    };

    this.userService.resetEmail(formData).subscribe(
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
