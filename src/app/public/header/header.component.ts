import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn:boolean = false;

  constructor(private auth:UserService,private router:Router){}

  ngOnInit(){
    this.auth.status().subscribe((res)=>{
      this.loggedIn = res;
      // console.log(this.loggedIn);

    },(err)=>{
      console.log(err);

    });
  }

  logOut(){
    const allDevice = true;
    this.auth.logOut(allDevice).subscribe((res)=>{
      localStorage.removeItem('user');
      localStorage.removeItem('token');

      this.auth.toggleLogin(false);
      //redirect
      this.router.navigate(['/login']);
    },(err)=>{
      console.log(err);

    });
  }

}
