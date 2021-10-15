import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

 userJson:any = localStorage.getItem('user');
  user =JSON.parse(this.userJson);
  error:any;
  message:any;

  wait = false;

  errors = {
    name:null,
    email:null,
    password:null,
  }
  form = new FormGroup({
    id: new FormControl(this.user.id),
    name: new FormControl(this.user.name, [Validators.required,Validators.minLength(2)]),
    email: new FormControl(this.user.email, [Validators.required,Validators.email]),
    mobile: new FormControl(this.user.mobile,[Validators.required,Validators.pattern(/[0-9]{8,}/)]),
    address:new FormControl(this.user.address,[Validators.required]),
    photo:new FormControl(""),
    card:new FormControl(""),
  });


  constructor(private userService: UserService,private toastr:ToastrService) { }

  ngOnInit(): void {

  }


  get f():any{
    return this.form.controls;
  }

  edit(){

  }
  update(){

    const formData = this.form.getRawValue();
      this.userService.profilReset(formData).subscribe(
        (res:any)=>{
          this.message = res.message;
          this.user = JSON.stringify(res.data);

          localStorage.setItem('user',this.user);
            this.toastr.success(this.message,'Mise à jours');
        },
        (err:any)=>{
          this.error = err.errors.error;

          this.toastr.error(this.error,"Mise à jours");

        }
      );



  }

}
