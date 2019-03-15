import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmarComponent } from './amar/amar.component';
import { AkbarComponent } from './akbar/akbar.component';
import { AnthonyComponent } from './anthony/anthony.component';
import { ChatService } from './chat.service';

@NgModule({
  declarations: [
    AppComponent,
    AmarComponent,
    AkbarComponent,
    AnthonyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
