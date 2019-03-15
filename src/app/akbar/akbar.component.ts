import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-akbar',
  templateUrl: './akbar.component.html',
  styleUrls: ['./akbar.component.css']
})
export class AkbarComponent implements OnInit {

  constructor(private cs : ChatService) { }
  msgs = [];
  ngOnInit() {
  }
  send(msg):void
  {
    msg = "Akbar : "+msg;
    this.msgs = this.cs.chat(msg);
  }
}
