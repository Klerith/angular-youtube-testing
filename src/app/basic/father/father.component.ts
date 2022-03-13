import { Component } from '@angular/core';
import { Client } from '../interfaces';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent  {

  public client?: Client;

  onSetClient( name: string ) {
    this.client = { id: 1, name };
  }

}
