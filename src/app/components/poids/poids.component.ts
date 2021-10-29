import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnnonceService } from 'src/app/services/annonce.service';
import { environment } from "../../../environments/environment.prod";

@Component({
  selector: 'app-poids',
  templateUrl: './poids.component.html',
  styleUrls: ['./poids.component.scss']
})
export class PoidsComponent implements OnInit {

  weights = [
    "de 1 à 5kg",
    "de 6 à 10kg",
    "de 11 à 15kg",
    "de 16 à 20kg",
    "de 21 à 25kg",
  ]
  prices = ["10","20","30","40","50"];

  lastIndex = (this.weights.length - 1);
  constructor(private annonce:AnnonceService, private router:Router,private http: HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  setWeightAndPrice(index:any=this.lastIndex){
    this.annonce.topicality.weight = this.weights[index];
    this.annonce.topicality.price = this.prices[index];
    this.onRegisterAnnonce();
    this.router.navigate(['home']);


  }

  onRegisterAnnonce(){
    const result = this.annonce.registerAnnonce().subscribe(
      (result:any)=>{
        localStorage.setItem('userAnnonceId',result.id);
        this.annonce.userAnnonceId = localStorage.getItem('userAnnonceId');
        this.toastr.success(result.message,"Annonce");
          console.log(result);
      },
      (error:any)=>{
          console.log(error);
          this.toastr.error("Enregistrement échoué","Annonce")

      }
    );

  }
}
