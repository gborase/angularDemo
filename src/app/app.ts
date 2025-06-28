import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  handleClickEvent(){
    alert("You are not trust resource"),
    console.log("I am Ganesh");
    
  }
  
}
