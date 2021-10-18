import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  close:any=false;

  chargement=false;

  errors = {
    name:null,
    email:null,
    password:null,
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(2)]),
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.pattern(/[a-zA-Z0-9!_.-]{8,}/)]),
    password_confirmation: new FormControl('',[Validators.required,Validators.pattern(/[a-zA-Z0-9!_.-]{8,}/)]),
    mobile: new FormControl('',[Validators.required,Validators.pattern(/[0-9]{8,}/)]),
    address:new FormControl('',[Validators.required]),

  });

  constructor(private router:Router,private auth:UserService) { }

  ngOnInit(): void {
  }

  get f():any{
    return this.form.controls;
  }

suivant(){
  let cond:any= document.querySelector('#conditions');
  let register:any= document.querySelector('#register');
  register.style.display= "none";
  cond.style.display= 'block';
}
  submit(){
    this.chargement=true;

      const formData = this.form.getRawValue();

      const data = {
        username: formData.email,
        password: formData.password,
        grant_type:'password',
        client_id: 2,
        client_secret: '75rTNfjQvjetkYOfh5k3AxOK2rzKSAvfHSyoQuh5',
        scope:'*'
        };

      this.auth.register(formData).subscribe(
        result =>{
          this.chargement=false;
          console.log(result);

          //connexion automatique
          this.auth.login(data).subscribe(
            (result:any) =>{
              console.log('success');
              sessionStorage.setItem('token',result.access_token)
              this.chargement=false;
              this.router.navigate(['/home']);
            }
          );
        },
        (error) =>{
          this.chargement=false;
          console.log(error);

          this.errors = error.error.errors;
          let cond:any =  document.querySelector('#conditions');
          let regis:any =  document.querySelector('#register');
          cond.style.diplay='none';
          regis.style.display = "block";
         console.log(error.error.errors);
          this.router.navigate(['/register']);
        }
      )


  }

}
