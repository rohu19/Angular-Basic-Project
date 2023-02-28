import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component {
person:FormGroup;


constructor(private httpClient:HttpClient,FormBuilder:FormBuilder){
this.person=FormBuilder.group({
  firstName:new FormControl(),
  lastName:new FormControl(),
  age:new FormControl()
})
}
}
