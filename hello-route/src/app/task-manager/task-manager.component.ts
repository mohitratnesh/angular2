import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  tasks = ["Jogging", "Dance Practice", "Road Trip", "StartUp Ideation", "Angular 4 Session"];

  newTask = "";

  addTask = function(){
    if(this.newTask != ""){
      this.tasks.push(this.newTask);
      this.newTask = "";
    } 
  }

  removeTask = function(currentElement){

    this.tasks.splice(currentElement, 1);

  }

  constructor() { }

  ngOnInit() {
  }

}
