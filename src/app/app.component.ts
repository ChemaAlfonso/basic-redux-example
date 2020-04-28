import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux';

  contador: number;

  constructor() {
    this.contador = 0;
  }

  increment(){
    this.contador++;
  }

  decrement(){
    this.contador--;
  }

}
