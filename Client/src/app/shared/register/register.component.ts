import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {AuthenticationService} from '../../service/authentication.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=new FormGroup({
email:new FormControl(null,[Validators.email,Validators.required]),
name:new FormControl(null,[Validators.required]),
password:new FormControl(null,[Validators.required]),
cpass:new FormControl(null,[Validators.required])
  })
  constructor(private route:Router, private AuthService:AuthenticationService) { }

  ngOnInit() {
  }

  moveToLogin(){
    this.route.navigate(['/login']);
  }

   register(){
     if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)){
console.log('Invalid form');
 return;
     }
     this.AuthService.register(JSON.stringify(this.registerForm.value))
    // console.log(JSON.stringify(this.registerForm.value))
    .subscribe(data=>{console.log(data); this.route.navigate(['/login']);},
    error=>console.error(error)
    )
  
    }


    get email(){ return this.registerForm.get('email')}
    get name(){ return this.registerForm.get('name')}
    get password(){ return this.registerForm.get('password')}
    get cpass(){ return this.registerForm.get('cpass')}
  }
