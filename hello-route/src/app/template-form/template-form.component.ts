import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private myService: DataServiceService) {
    
      console.log(this.myService.person.name);
      this.myService.person.name = "RK;"

   }

  registerForm;

  ngOnInit() {

    this.registerForm = new FormGroup({
      fullName:new FormControl("", Validators.required),
      email:new FormControl(),
      sayGender:new FormControl()
    });

  }

  onFormSubmit = function(myUser){
    debugger;
    console.log(myUser.sayGender);
  }

}
