import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ServiceMessagesService } from '../service-messages.service';


@Component({
  selector: 'app-web-chat',
  templateUrl: './web-chat.component.html',
  styleUrls: ['./web-chat.component.scss']
})
export class WebChatComponent implements OnInit {

  showMessage: string = "";
  messagesItems: any[] = [];
  messagesItemsParse: any[] = [];
  messageList: any[] = [];

  typeMessage:string = "";

  //pegar este valor da sessão!
  userId:number = 1;
  currentUserMessage:boolean = false;

  setCssAppeared:string = ""

  constructor(private apiService: ServiceMessagesService) {
    this.getMessagesService();
   }

  ngOnInit(): void {
  }


  async sendMessage(){

    console.log("### Message sended ###");
    // await this.apiService.sendMessages().subscribe( res => {

    // })

  }

  async getMessagesService(){

    await this.apiService.getMessages().subscribe( res => {

      this.messagesItemsParse = JSON.parse(JSON.stringify(res));
  
      this.messagesItemsParse.forEach(element => {

        console.log("element::: " + element.id);
        
        this.userId === element.id ? this.typeMessage = "right" : this.typeMessage = "left";
  
        this.messagesItems.push(
          {
            id: element.id,
            nome : element.nome,
            message: element.message,
            typeMsg: this.typeMessage
            //currentUser: this.currentUserMessage            
          }
        )
      })


    })

    this.messageList = this.messagesItems;

console.log("aaa:: " + this.messageList);
  } 

}
