import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Customer{
  name : String;
  age : number;
  address : String;
}



@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  name: string = 'Angular';

  customer : Customer = {
    name:'',
    age :0,
    address :''
}

  clickMe(){
    alert("button clicked");
  }
}
