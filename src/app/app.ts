import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./page/nav/nav";
import { FormsModule } from '@angular/forms';

interface Customer{
  name: String;
  age:Number;
  address:String; 
}

@Component({
  selector: 'app-root',
  imports: [Nav, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  customer : Customer = {
    name:'',
    age :0,
    address :''
  }
  
  name: string = 'Angular';

  clickMe(){
    alert("button clicked");
  }
  
  
}
