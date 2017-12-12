import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 5';
  title1 = "I am learning Angular 4";
  friends = ['manoj','rohan','iqbal','john'];
  printMe =false;
  printMe2 = false;
}
