import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/services/annonce.service';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

    userInfo:any ={};

    //Objets contenants des tableaux d'annonces de chaque transporteur
    annonces:any=[];
    baseUrl=environment.apiUrl+'public/imagesProfil/';
    imageUrl='../../../assets/images/profil.jpg';
    message:string ='';

  constructor(private annonce:AnnonceService) { }

  ngOnInit(): void {
    this.getAll();

  }

  getAll(){
    this.annonce.getAll().subscribe(
      (result:any)=>{
          this.annonces = result.data;
          this.userInfo = result.userInfo;
          console.log(this.userInfo);
      },(error)=>{
        this.message=error;
      }
    );
  }

}
