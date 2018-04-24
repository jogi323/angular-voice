import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpeechModule } from 'ngx-speech';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpeechModule
  ],
  providers: [
    { provide: 'SPEECH_LANG', useValue: 'en-US' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
