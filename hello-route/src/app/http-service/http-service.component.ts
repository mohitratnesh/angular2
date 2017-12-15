import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css']
})
export class HttpServiceComponent implements OnInit {

  constructor(private consumeService: DataServiceService) { }

  ngOnInit() {
    
    console.log(this.consumeService.getData());

  }

}
