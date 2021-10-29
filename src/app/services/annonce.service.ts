import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment.prod";

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
    return this.http.post(environment.apiUrl+"countries",pays,{headers:this.headers});
  }
  getCities(id:number,data:any=""){
    return this.http.post(environment.apiUrl+"cities/"+id,data,{headers:this.headers});
  }


  registerAnnonce():any{

    return this.http.post(environment.apiUrl+"topicality_register",this.topicality,{headers:this.headers});
  }
  getAll(){
    const destination = this.expIfo.destination;
    const city = this.expIfo.city

    return this.http.get(environment.apiUrl+"topicalities/"+destination+'/'+city,{headers:this.headers});
  }
  getAnnonceById(id:number){
    return this.http.get(environment.apiUrl+"topicality/"+id,{headers:this.headers});
  }

  getUserAnnonces(){
    return this.http.get(environment.apiUrl+"user_topicalities",{headers:this.headers});
  }

  updateAnnonce(id:number,data:any){
    return this.http.post(environment.apiUrl+"topicality_update/"+id,data,{headers:this.headers}) ;
  }

  deleteAnnonce(id:number){
    return this.http.delete(environment.apiUrl+"topicality_delete/"+id,{headers:this.headers});
  }
}
