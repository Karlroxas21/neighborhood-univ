import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  var1 : any;
  public loginForm !: FormGroup;
  constructor(public httpClient : HttpClient, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    });
  }

  login(){
    this.httpClient.get<any>('http://localhost:3000/accounts')
    .subscribe(res=>{
      const user = res.find((a: any)=>{
        return a.email === this.loginForm.value.username &&
        a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        console.log("Login Success");
        this.loginForm.reset();
      }else{
        alert("Account not found!");
        console.log("Account not found!");
      }
      }, err=>{
        alert("Something went wrong");
        console.log("Something went wrong");
    })
  }

  

}
