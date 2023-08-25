import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'myApp';
  canClick = true;
  message = 'Hello, World';
  cont = 0;
  contUp5 = false
  object = ['galo', 'da massa', 'gigante alvinegro', 'galo das gerais', 'colossal']
  sayMessage() {
    this.cont++;
    if(this.cont >= 5){
      this.contUp5 = true
    }
  }
  countDown() {
    this.cont--;
    if(this.cont <= 0){
      this.contUp5 = false
    }
  }
}
