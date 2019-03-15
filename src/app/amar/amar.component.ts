import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-amar',
  templateUrl: './amar.component.html',
  styleUrls: ['./amar.component.css']
})
export class AmarComponent implements OnInit {

  constructor(private cs : ChatService) { }
  msgs = [];
  ngOnInit() {
  }
  send(msg):void
  {
    msg = "Amar : "+msg;
    this.msgs = this.cs.chat(msg);
  }
}
