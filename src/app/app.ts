import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

count:number=0;
handleIncrement(){
  this.count=this.count+1
}
handleDecrement(){
  this.count=this.count-1
}
hadleReset(){
  this.count=0;
}

handleCounter(val:String){
if(val=='minus'){
  this.count=this.count-1
}
else if(val=='plus'){
  this.count=this.count+1
}
else{
   this.count=0;
}

}
}
