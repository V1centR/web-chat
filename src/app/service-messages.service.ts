import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceMessagesService {

  LIVE_CHAT_API:string = "http://localhost:3000/livechat";

  constructor(private http: HttpClient) { }

  getMessages(){
    return this.http.get(`${this.LIVE_CHAT_API}`);
  }

  sendMessage(bodyMessage: any):Observable<any>{

   return this.http.post(`${this.LIVE_CHAT_API}`,bodyMessage);

  }

}
