import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user:any ;

  imageUrl='../../../assets/images/profil.jpg';
  files:any;
  form:FormGroup =new FormGroup({});
  defaultPhoto = true;

  constructor(private router:Router, private userInfo:UserService,private formBuilder: FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    //check status
    this.userInfo.status().subscribe(
      res=>console.log(res)
    );
    this.userInfo.user().subscribe(
      (result:any) =>{
        this.user = result;
        localStorage.setItem('user',JSON.stringify(this.user));

        if(this.user.photo==null || this.user.photo=='') {
          this.imageUrl ='../../../assets/images/profil.jpg';
          this.defaultPhoto=true;
        }else{
          this.imageUrl ='http://localhost:8000/public/imagesProfil/'+this.user.photo ;
          this.defaultPhoto=false;
        }

        },
      error =>{
        // localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    );
    //Loading photo
    this.createForm();
  }


  createForm(){
    this.form = this.formBuilder.group({
      photo:['', Validators.required]
    })
  }

  registerPhoto(){
    const formData = new FormData();
    formData.append('photo',this.files,this.files.name);
    this.userInfo.uploadFile(formData).subscribe(
      (res:any)=>{
          this.imageUrl = environment.apiUrl+'/public/imagesProfil/'+res.profilUrl;

          if (res.success ===true) {
            this.toastr.success(res.message,"",{
              timeOut:3000,
              progressBar:true
            });

          }else{
            this.toastr.error(res.message,"",{
              timeOut:2000,
              progressBar:true
            });

          }
      },
      (err:any)=>{

          console.log(err.error);
          this.toastr.error("Une erreur est subvenue.Veillez choisir une autre image","",{
            timeOut:3000,
            progressBar:true
          });

      });
      this.defaultPhoto=false;
    this.form.get('photo')?.reset();
  }

   changePhoto(event:any){
    if(event.target.files){
      this.files = event.target.files[0];

      // let reader =new FileReader();
      // reader.readAsDataURL(event.target.files[0]);
      // reader.onload =(event:any)=>{
      //   this.imageUrl= event.target.result;
      // }
    }
    this.registerPhoto();
  }


}
