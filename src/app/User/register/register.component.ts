import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authservice:AuthService, 
    private formbuilder:FormBuilder
  ) { }
  registeruser:any={};
  registerform:FormGroup;
  ngOnInit() {
    this.createregisterform();
  }
  createregisterform()
  {
    this.registerform=this.formbuilder.group({
      PassID:["",Validators.required],
      Name:["",Validators.required],
      Surname:["",Validators.required],
      Gender:["",Validators.required],
      Mail:["",Validators.required],
      Citizenship:["",Validators.required],
      Phone:["",Validators.required],
      Password:["",Validators.required]
    })
  }
  register(){
    if(this.registerform.valid)
     {
        this.registeruser=Object.assign({},this.registerform.value)
        this.authservice.register(this.registeruser)
     }
   

  }
}
