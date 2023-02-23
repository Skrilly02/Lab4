import { makeBindingParser } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'root-directive',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-first-app';
  name: String = "Andy";

  age: number = 24;
}


