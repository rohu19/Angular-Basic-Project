import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl,FormBuilder, Validators ,FormArray} from '@angular/forms';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
 
  person: FormGroup;
  



constructor(private formBuilder:FormBuilder,private HttpClient:HttpClient){
  this.person=formBuilder.group({
    id:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    address: this.formBuilder.group({ 
                                      id:new FormControl(),
                                      state :new FormControl(),
                                      pinNo:new FormControl()
                                    })

  });

}
  get addresses(){
    return this.person.get('address') as FormArray;
  }
  get id(){
    return this.person.get('id');
  }

  get name(){
    return this.person.get('name');
  }
  get age(){
    return this.person.get('age');
  }

  get state(){
    return this.person.get('state');
  }
  get pinNo(){
    return this.person.get('pinNo');
  }
save(){
  this.HttpClient.post<any>('http://localhost:9090/person',this.person.value).subscribe(result=>{
 console.log(result);

  });
}
}







