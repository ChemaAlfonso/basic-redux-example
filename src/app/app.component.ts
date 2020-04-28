import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { AppState } from './app.reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'redux';

  contador: number;

  constructor( private store: Store<AppState> ) {
  }

  ngOnInit(): void {
    this.store.select('contador').subscribe( contador => this.contador = contador );
  }

  increment(){
    this.store.dispatch( actions.increment() );
  }

  decrement(){
    this.store.dispatch( actions.decrement() );
  }

}
