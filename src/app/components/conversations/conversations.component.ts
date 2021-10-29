import { Component, OnInit } from '@angular/core';
import { ConversationService } from 'src/app/services/conversation.service';
import { environment } from "../../../environments/environment.prod";

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit {

  user:any ={};
  conversations:any =[];
  conversationsUnreads:any =[];
  error:any;
  count:number =0;

  constructor(private conversationService :ConversationService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);

    this.loadConversations();

  }

  loadConversations(){
     this.conversationService.conversations().subscribe(
       (result:any)=>{
         this.conversations = result.conversations;

         this.conversations.forEach((conversation:any) => {
            if (conversation.unread !=0) {
              this.conversationsUnreads.push(conversation);
            }
         });
         this.count = this.conversationsUnreads.length;

       },
       (err:any)=>{
          this.error = err.message;
          console.log(this.error);

       }
     );
     console.log(this.conversationsUnreads);

  }

}
