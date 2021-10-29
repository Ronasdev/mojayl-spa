import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConversationService } from 'src/app/services/conversation.service';
import { environment } from "../../../environments/environment.prod";
import * as moment from 'moment';
import Pusher from 'pusher-js';

moment.locale('fr');
@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {

  baseUrl=environment.apiUrl+'public/imagesProfil/';

  imageUrl:any;
  imageDefault ="../../../assets/images/profil.jpg";

  conversationId:number=0;

  messages: any ;
  count:number=0;
  user:any;

  content:any = '';
  errors:any;

  loading:boolean =false;

  $messages:any;
  markAsRead:any;

  constructor(private route: ActivatedRoute, private conversationService: ConversationService ) { }

  ngOnInit(): void {
    this.conversationId= this.route.snapshot.params['id'];
    let from:any = localStorage.getItem('user');
    let id = JSON.parse(from).id


     // Enable pusher logging - don't include this in production
     Pusher.logToConsole = true;

    const pusher = new Pusher('563e5e968278ec7bd380', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe("chat");

    channel.bind('newMessage', (data:any)=> {
        this.messages.push(data.message);
        this.scrollBot();

    });


    this.$messages = document.getElementById('box');
    this.imageUrl = this.imageDefault;
    this.loadMessages(this.conversationId);

  }

  scrollBot(){

    this.$messages.scrollTop = this.$messages.scrollHeight;

  }

  onScroll(){
      console.log(this.$messages.scrollTop);

    if (this.$messages.scrollTop==0) {
      console.log('ok');

      this.loading=true
        this.$messages.removeEventListener('scroll',this.onScroll());
        let previousHeight = this.$messages.scrollHeight;
        this.loadPreviousMessages(this.conversationId);

        this.$messages.scrollTop = this.$messages.scrollHeight - previousHeight;
        console.log(this.count);

        if (this.messages.length < this.count) {
          this.$messages.addEventListener('scroll',this.onScroll());
        }
        this.loading = false;
    }
  }

  loadPreviousMessages(conversationId:number){
    let message = this.messages[0];
    if (message) {
      this.conversationService.previousMessages(message,conversationId).subscribe(
        (result:any)=>{

          this.messages.shift(result.messages);
          console.log(this.messages);


        }
      );
    }
  }
  lastMessages(){
    return this.messages[this.messages.lenght - 1];
  }

  loadMessages(conversationId:number){
    this.conversationService.messages(conversationId).subscribe(
      (result:any)=>{
          this.messages = result.messages;
          this.count = result.count;
          this.user = result.user;

          this.scrollBot();
          if (this.user.photo) {
            this.imageUrl = this.baseUrl+this.user.photo;
          }

          if (this.messages.length < this.count) {

            this.$messages.addEventListener('scroll',this.onScroll());
          }
      },
      (err)=>{

      }
    );
  }

  sendMessage(e:any){

    if (e.shiftKey === false ) {

        if (e.key ==="Enter") {
          this.loading = true;
          e.preventDefault();
          this.content = e.target.value;
          this.conversationService.onSendMessage(this.content,this.conversationId).subscribe(
            (result:any)=>{
              this.content ='';
              let from:any = localStorage.getItem('user');
              result.message.from = JSON.parse(from)
              // this.messages.push(result.message)
              this.count++;
              this.loading = false;
            },
            (error)=>{
              this.content ='';
              this.errors = error.error;
              console.log(this.errors);

              this.loading = false;
              this.scrollBot();
            }

          );
        }
      }

    }

    ago(message:any){
      return moment(message.created_at).fromNow();
    }

}
