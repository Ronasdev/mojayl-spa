import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { environment } from "../../environments/environment";
import { ConversationService } from '../services/conversation.service';
import Pusher from 'pusher-js';

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

  conversationCount = 0;

  constructor(private router:Router, private userInfo:UserService,private formBuilder: FormBuilder,private toastr: ToastrService,private conversationService: ConversationService) { }

  ngOnInit(): void {
    //check status
    this.userInfo.status().subscribe(
      res=>console.log(res)
    );

    //Loading user
    this.loadUser();
    this.createForm();
    //conversation notification
    this.countConversations();
       // Enable pusher logging - don't include this in production
       Pusher.logToConsole = true;

       const pusher = new Pusher('563e5e968278ec7bd380', {
         cluster: 'eu'
       });

       const channel = pusher.subscribe("chat");

       channel.bind('newMessage', (data:any)=> {
         if(data.unread){
          this.conversationCount ++;
          console.log(this.conversationCount);

         }

       });

  }

  countConversations(){
    this.conversationService.conversations().subscribe(
      (result:any)=>{
        result.conversations.forEach((conversation:any) => {
            if (conversation.unread !=0) {
              this.conversationCount ++;
            }
        });

      });
  }
  loadUser(){
    this.userInfo.user().subscribe(
      (result:any) =>{
        this.user = result;
        localStorage.setItem('user',JSON.stringify(this.user));

        if(this.user.photo==null || this.user.photo=='') {
          this.imageUrl ='../../../assets/images/profil.jpg';
          this.defaultPhoto=true;
        }else{
          this.imageUrl =environment.apiUrl+'public/imagesProfil/'+this.user.photo ;
          this.defaultPhoto=false;
        }

        },
      error =>{
        // localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    );
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
          this.imageUrl = environment.apiUrl+'imagesProfil/'+res.profilUrl;

          console.log(this.imageUrl);

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
