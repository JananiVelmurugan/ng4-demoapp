import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Ignite UI with Angular!';
  height=200;
  width=200;
  num1:number;
  num2:number;
  result:number;
  add(){
    this.result=this.num1+this.num2;
  }
  sayHello(){
    alert('Hello Janani');
  }
}
