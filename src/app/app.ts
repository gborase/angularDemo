import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';


@Component({
  selector: 'app-root',
  imports: [Login,Signup,Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-angular-app';
  name='Ganesh';
  x=10;
  y=20;
  user1='Ganesh';
  user2='Shubham';
}
