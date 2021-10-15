import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-address',
  templateUrl: './reset-address.component.html',
  styleUrls: ['./reset-address.component.scss']
})
export class ResetAddressComponent implements OnInit {

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
      address: form.value.address
    };
    this.userService.resetAddress(formData).subscribe(
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
