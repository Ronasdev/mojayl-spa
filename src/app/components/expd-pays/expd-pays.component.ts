import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-expd-pays',
  templateUrl: './expd-pays.component.html',
  styleUrls: ['./expd-pays.component.scss']
})
export class ExpdPaysComponent implements OnInit {

  index:any;
  country_id:number = 1;

  countries:any =[];
  indices:any =[];

  constructor(private annonce: AnnonceService,private router:Router) { }

  ngOnInit(): void {
    this.getPays();

  }

  getPays(){
    const search:any = document.querySelector("#search");
    const query = search.value;

    if (query !='') {
      const data = {
        name: query
      }
      this.annonce.getPays(data).subscribe(
        (result:any)=> {
          this.countries = result.countries;
        },
        (error)=>console.log(error)

      );
    } else {
      this.annonce.getPays().subscribe(
        (result:any)=> {
          this.countries = result.countries;
        },
        (error)=>console.log(error)

      );
    }

  }

  getCountry(index:any){
    this.index = index;
    this.country_id= this.countries[this.index].id;
    this.annonce.expIfo.destination = this.countries[this.index].name;
    this.router.navigate(["expediteur/city/"+this.country_id]);

  }

}
