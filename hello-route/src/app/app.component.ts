import { Component } from '@angular/core';
import { DataServiceService } from  './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 5';
  title1 = "I am learning Angular 4";
  friends = ['Manoj','Rohan','Iqbal','John'];
  printMe =false;
  printMe2 = false;
  myDate = new Date();

  myNumber = [34, 65, 76, 87, 12];


  constructor(private consumeService: DataServiceService){
    //debugger; //debug here!
    //console.log(this.myService.callSuccess());
    //console.log(this.myService.person.name);
    console.log(this.consumeService.callSuccess());
    console.log(this.consumeService.person.name);
    
    this.consumeService.person.name = "Pradeep;"
    console.log("____________________________");
   

  }




}
