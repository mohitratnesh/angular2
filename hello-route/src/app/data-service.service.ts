import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {

  constructor(private myHttp:Http) { 

    

  }

  getData(){

    this.myHttp.get('https://jsonplaceholder.typicode.com/users').map(
      (response) => (response.json())
    ).subscribe(
      (data) => console.log(data)
    )

  }

  person= {
    id:"123",
    name:'prafful'
  }

  callSuccess(){
    return "Successful Call to DataServiceService ";
  }

}
