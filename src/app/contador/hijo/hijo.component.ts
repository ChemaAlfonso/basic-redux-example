import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input()  contador: number;
  @Output() cambioContador: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  multiply(){
    this.contador *= 2;
    this.cambioContador.emit( this.contador );
  }
  divide(){
    this.contador /= 2;
    this.cambioContador.emit( this.contador );
  }

  resetNieto( nuevoContador ) {
    this.contador = nuevoContador;
    this.cambioContador.emit( this.contador );
  }

}
