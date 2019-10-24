import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
  animations: [
  ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor() { }

  ngOnInit() {
  }
}
