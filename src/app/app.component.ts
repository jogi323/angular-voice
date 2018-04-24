import { Component,OnInit } from '@angular/core';
import { SpeechService } from 'ngx-speech';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  msg = '';

  constructor(public speech: SpeechService) {

  }

  getVoice(){
    this.speech.start();
      this.speech.message.subscribe(msg => {
        this.msg = msg.message;
        if(this.msg.length){
          this.speech.stop();
        }
    });
  }

  ngOnInit() {
      
  }
}
