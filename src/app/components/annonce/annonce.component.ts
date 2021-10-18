import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {

  id:number = 0;
  annonce:any;
  message:string='';
  user:any;
  author:any;

  imageUrl="../../../assets/images/profil.jpg";
  imageDefault ="../../../assets/images/profil.jpg";
  baseUrl='https://mojayl-api.herokuapp.com/public/imagesProfil/';
  defaultPhoto:any;

  constructor(private route:ActivatedRoute,private annoneService:AnnonceService,private router:Router) { }

  ngOnInit(): void {
    this.user =localStorage.getItem('user')
    this.user=JSON.parse(this.user);
    if( this.user.photo!='' && this.user.photo!=null) {
      this.imageUrl =this.baseUrl+this.user.photo ;
          this.defaultPhoto=false;
    }
    this.id= this.route.snapshot.params['id'];
    this.showAnnonce();
  }

  showAnnonce()
  {
    this.annoneService.getAnnonceById(+this.id).subscribe(
      (res:any)=>{
        this.annonce= res.data;
        this.author = res.author;
      },
      (err:any)=>this.message=err.message
    )
  }


}
