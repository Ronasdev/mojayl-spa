import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  //Toggle loggedIn
  toggleLogin(state:boolean):void{
    this.isLoggedIn.next(state);
  }

  //status
  status(){
    const localData = localStorage.getItem("user");
    if (!localData) {
      this.isLoggedIn.next(false);
      console.log("L'utilisateur n'est pas connecté");
    }
    // const userObj = JSON.parse(localData);
    // const token_expires_at = userObj.token_expires_at;
    // const curent_date = new Date();

    // const token = localStorage.getItem("token");
    const token = sessionStorage.getItem("token");
    if (token) {
      this.isLoggedIn.next(true);
    } else {
      this.isLoggedIn.next(false);
      console.log("Token expiré");
    }


    return this.isLoggedIn.asObservable();
  }
  //login
  login(data:any){
    return this.http.post('https://mojayl-api.herokuapp.com/oauth/token',data);
  }

  //User info
  user(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
   return this.http.get('https://mojayl-api.herokuapp.com/user', {headers: headers})
  }

  uploadFile(data:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    return this.http.post('https://mojayl-api.herokuapp.com/user/photo',data,{headers:headers});
  }

  //logOut
  logOut(allDevice:boolean){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
   return this.http.post('https://mojayl-api.herokuapp.com/logout',{allDevice:allDevice}, {headers: headers});
  }

  //register
  register(formData:any){
   return this.http.post('https://mojayl-api.herokuapp.com/register', formData)
  }
  //forgot password
  forgot(email:string){
    return this.http.post('https://mojayl-api.herokuapp.com/forgot',{email:email})
  }

  //Reset pass
  reset(token:string, password:string, password_confirmation:string){
    const data ={
      token:token,
      password:password,
      password_confirmation:password_confirmation
    };

    return this.http.post('https://mojayl-api.herokuapp.com/reset', data)

  }

  resetEmail(formData:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
      return this.http.post('https://mojayl-api.herokuapp.com/reset_email',formData,{headers:headers});
  }
  updatePassword(formData:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
      return this.http.post('https://mojayl-api.herokuapp.com/update_password',formData,{headers:headers});
  }
  resetMobile(formData:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
      return this.http.post('https://mojayl-api.herokuapp.com/reset_mobile',formData,{headers:headers});
  }
  resetAddress(formData:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
      return this.http.post('https://mojayl-api.herokuapp.com/reset_address',formData,{headers:headers});
  }

  profilReset(formData:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });

    return this.http.put('https://mojayl-api.herokuapp.com/user_reset',formData,{headers:headers});
  }
}
