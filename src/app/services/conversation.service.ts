import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  headers = new HttpHeaders({
    "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    "accept":'application/json'
  });



  constructor(private http: HttpClient) { }

  conversations(){
    return this.http.get(environment.apiUrl+'conversations',{headers:this.headers});
  }

  messages(conversationId:number){
      return this.http.get(environment.apiUrl+'conversations/'+conversationId,{headers:this.headers});
  }

  onSendMessage(content:any,toId:number){
    return this.http.post(environment.apiUrl+'conversations/'+toId,{content:content},{headers:this.headers});
  }
 previousMessages(message:any,conversationId:number){

    let url = environment.apiUrl+'conversations/'+conversationId+'?before='+message.created_at;

    return this.http.get(url,{headers:this.headers});
  }
}
