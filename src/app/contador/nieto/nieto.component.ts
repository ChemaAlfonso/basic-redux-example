import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  @Input() contador: number;
  @Output() cambioContador: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.contador = 0;
    this.cambioContador.emit(this.contador);
  }
}
