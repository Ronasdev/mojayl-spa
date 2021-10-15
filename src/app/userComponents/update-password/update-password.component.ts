import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  message:any ='';
  error:any ='';
  wait:boolean =false;

  constructor(private userService: UserService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  update(form:any){
    this.wait =true;
    const formData ={
      password_old: form.value.password_old,
      password: form.value.password,
      password_confirmation: form.value.password_confirmation
    };
    this.userService.updatePassword(formData).subscribe(
        (res:any)=>{
            this.message = res.message;
            this.toastr.success(this.message,"Mise à jour");
            this.wait =false;
            this.router.navigate(['home']);
        },
        (err:any)=>{
          if (err.error.errors) {
            this.error = err.error.errors;
            this.toastr.error(this.error.password,"Mise à jour");
          }
          if (err.error.error) {
            this.error = err.error;
            this.toastr.error(this.error.error,"Mise à jour");
          }

          console.log(err.error);

          this.wait =false;
        }
    );
  }
}
