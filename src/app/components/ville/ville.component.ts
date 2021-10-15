import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.scss']
})
export class VilleComponent implements OnInit {

  country = this.annonce.topicality.destination;
  country_id:number=1;
  cities:any = [ ];

  constructor(private annonce:AnnonceService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.country_id = this.route.snapshot.params['id'];

    this.getCountryCities();

    console.log(this.country_id);

  }
  getCountryCities(){
    const search:any = document.querySelector("#search");
    const query = search.value;

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
    this.annonce.topicality.city = city;
    this.router.navigate(['transporter','date']);
  }
}
