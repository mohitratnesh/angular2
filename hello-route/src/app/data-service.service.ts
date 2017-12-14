import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {

  constructor() { }

  person= {
    id:"123",
    name:'prafful'
  }

  callSuccess(){
    return "Successful Call to DataServiceService ";
  }

}
