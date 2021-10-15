import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-annonce-resume',
  templateUrl: './annonce-resume.component.html',
  styleUrls: ['./annonce-resume.component.scss']
})
export class AnnonceResumeComponent implements OnInit {

  user:any ={};
  userAnnonces:any =[];
  message:string ='';
  userAnnonceIndex:number =0;

  imageUrl="../../../assets/images/profil.jpg";
  defaultPhoto = true;

  constructor(private annonce:AnnonceService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('user');
    this.user= JSON.parse(this.user);
    if( this.user.photo!='') {
      this.imageUrl ='http://localhost:8000/public/imagesProfil/'+this.user.photo ;
          this.defaultPhoto=false;
    }
      this.onGetAnnonces();

  }

  onGetAnnonces(){
    const annonce = this.annonce.getUserAnnonces().subscribe(
      (result:any)=>{
          this.userAnnonces = result.data;

          if (this.userAnnonces.length==0) {
            this.message="Vous n'avez aucune annonce postée pour l'instant";
          }
      },
      (error)=>{
          this.message=error.message;
          console.log(error);

      }
    )
  }
  onUpdateAnnonce(index:number){

    const id = this.userAnnonces[index].id;

  }
  onDeleteAnnonce(index:number){
    const id = this.userAnnonces[index].id;
    const deleted = this.annonce.deleteAnnonce(id).subscribe(
      (result:any)=>{
        this.toastr.error(result.message,"Suppression");
          localStorage.removeItem('userAnnonceId');
          this.ngOnInit();
          // this.router.navigate(['home']);

      },
      (error)=>{
        console.log(error);

      }
    )
  }

}
