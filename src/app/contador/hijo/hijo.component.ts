import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe( contador => this.contador = contador)
  }

  multiply(){
    this.store.dispatch( actions.multiply({numero: 2}) )
  }

  divide(){
    this.store.dispatch( actions.divide({numero: 2}))
  }

}
