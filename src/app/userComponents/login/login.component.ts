import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({}) ;

chargement = false;
error=false;

  constructor( private fb: FormBuilder, private router: Router,private auth:UserService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }

submit(){
  this.chargement=true;
    const formData = this.form.getRawValue();

    const data = {
    username: formData.email,
    password: formData.password,
    grant_type:'password',
    client_id: 2,
    client_secret: 'LNOrA08E6uZDhaMKAeRY315Wp3BRL0LTTxPHgvB7',
    scope:'*'
    };

    //https://git.heroku.com/snapse-api.git
    this.auth.login(data).subscribe(
      (result:any) =>{
        // localStorage.setItem('token',result.access_token);
        sessionStorage.setItem('token',result.access_token);

        this.chargement=false;
        this.router.navigate(['/home']);
      },
      error =>{
       this.error=true;
       this.chargement=false;
        console.log(error);
      }
    )

  }

}
