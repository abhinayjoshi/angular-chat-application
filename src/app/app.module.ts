import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatModule } from './../app/chat/chat.module';
import { UserModule } from './../app/user/user.module';

@NgModule({
  imports:      [ 
   BrowserModule, 
   FormsModule,
   ChatModule,
   UserModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
