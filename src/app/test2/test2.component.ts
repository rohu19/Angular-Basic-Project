import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
name:any;
  constructor(private httpClient:HttpClient){

  }
    getName()
    { 
      this.httpClient.get<any>('http://localhost:9090/person/search/'+ this.name).subscribe(
        result => {
          console.log(result);
        }
      )
  }
}
