import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebChatComponent } from './web-chat/web-chat.component';

const routes: Routes = [
  { path: 'live-chat', component: WebChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
