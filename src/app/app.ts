import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
name:string|number="Ganesh";
other:any="Prakash"
  handleClickEvent(){
    this.other=true;
    this.other=false;
    this.other=[12,13,14];
    this.name=12;
  }

  updateVar(){
let x=23;
console.log(x);
let y=this.sum(23,23);
console.log(y);
  }
  
  sum(a:number,b:number){
    console.log(a+b);
  }
  
}
