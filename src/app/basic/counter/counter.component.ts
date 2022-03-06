import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit {

  counter: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  increaseBy( value: number ) {
    this.counter += value;
    // TODO:
    // console.log({ newValue: this.counter });
    
  }
}
