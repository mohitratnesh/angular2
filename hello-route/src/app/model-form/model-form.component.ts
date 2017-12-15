import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  constructor(private srv:DataServiceService) {
    
      console.log(this.srv.person.name);
  }

  ngOnInit() {
  }

  onFormSubmit = function(myUser){
    console.log(myUser);
  }

}
