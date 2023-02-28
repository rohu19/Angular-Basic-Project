import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component {
  pinNo:any;

  constructor(private httpClient:HttpClient){

  }
    getPin()
    { 
      this.httpClient.get<any>('http://localhost:9090/address/search/'+ this.pinNo).subscribe(
        result => {
          console.log(result);
        }
      )
  }
  }
