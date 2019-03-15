export class ChatService {
  chatMsgs = new Array<string>();
  constructor() {}

  chat(msg):string[]
  {
    this.chatMsgs.push(msg);
    return this.chatMsgs;
  }
}
