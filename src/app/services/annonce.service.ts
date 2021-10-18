import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  topicality:any={
    destination:'',
    city:'',
    start_date:'',
    weight:'',
    price:0,
  };
  pays=[];
  expIfo:any ={
    destination:'non',
    city:'non'
  };
  headers = new HttpHeaders({
    "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    "accept":'application/json'
  });

  annonces:any=[];
  userAnnonceId:any;

  constructor(private http: HttpClient) { }

  getPays(pays:any =""){
    return this.http.post("https://mojayl-api.herokuapp.com/countries",pays,{headers:this.headers});
  }
  getCities(id:number,data:any=""){
    return this.http.post("https://mojayl-api.herokuapp.com/cities/"+id,data,{headers:this.headers});
  }


  registerAnnonce():any{

    return this.http.post("https://mojayl-api.herokuapp.com/topicality_register",this.topicality,{headers:this.headers});
  }
  getAll(){
    const destination = this.expIfo.destination;
    const city = this.expIfo.city

    return this.http.get("https://mojayl-api.herokuapp.com/topicalities/"+destination+'/'+city,{headers:this.headers});
  }
  getAnnonceById(id:number){
    return this.http.get("https://mojayl-api.herokuapp.com/topicality/"+id,{headers:this.headers});
  }

  getUserAnnonces(){
    return this.http.get("https://mojayl-api.herokuapp.com/user_topicalities",{headers:this.headers});
  }

  updateAnnonce(id:number,data:any){
    return this.http.post("https://mojayl-api.herokuapp.com/topicality_update/"+id,data,{headers:this.headers}) ;
  }

  deleteAnnonce(id:number){
    return this.http.delete("https://mojayl-api.herokuapp.com/topicality_delete/"+id,{headers:this.headers});
  }
}
