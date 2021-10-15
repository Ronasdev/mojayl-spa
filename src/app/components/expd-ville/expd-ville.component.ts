import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-expd-ville',
  templateUrl: './expd-ville.component.html',
  styleUrls: ['./expd-ville.component.scss']
})
export class ExpdVilleComponent implements OnInit {

  country = this.annonce.expIfo.destination;
  country_id:number=1;
  cities:any = [ ];



  constructor(private annonce:AnnonceService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.country_id = this.route.snapshot.params['id'];
    this.getCountryCities();


  }
  getCountryCities(){
    let search:any = document.querySelector("#search");
    let query:any = '';
     query = search.value;

    if (query !='') {
      const data = {
        name: query
      }
      this.annonce.getCities(this.country_id,data).subscribe(
        (result:any)=> {
          this.cities = result.cities;
        },
        (error)=>console.log(error)

      );
    } else {
      this.annonce.getCities(this.country_id).subscribe(
        (result:any)=> {
          this.cities = result.cities;
        },
        (error)=>console.log(error)

      );
    }

  }
  getCity(index:any){
    let city = this.cities[index].name;
    this.annonce.expIfo.city = city;
    this.router.navigate(['annonces']);
  }

}
