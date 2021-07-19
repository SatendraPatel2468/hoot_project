import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {AuthenticationService} from '../../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required])
  })
  
  constructor(private router:Router, private authService:AuthenticationService) { }

  ngOnInit() {}

 moveToRegister(){
   this.router.navigate(['/register']);
 } 

  login(){
    if(!this.loginForm.valid){
           console.log("Invalid");
           return;
         }
//console.log(JSON.stringify(this.loginForm.value))
this.authService.login(JSON.stringify(this.loginForm.value))
.subscribe(data=>{console.log(data), this.router.navigate(['/home']);},
error=>console.log(error)
)
        }

        get email(){ return this.loginForm.get('email')}
        get password(){ return this.loginForm.get('password')}
        
    // var remembered = window.localStorage.getItem('rememberMe');

    // if(remembered==undefined){
    //   this.loginForm = this.formBuilder.group({
    //     email: ['', [Validators.required, Validators.email]],
    //     password: ['', [Validators.required, Validators.minLength(8)]]
    //   });
    // }else{
    //   let rem = JSON.parse(remembered);
    //   this.loginForm = this.formBuilder.group({
    //     email: [rem.email, [Validators.required, Validators.email]],
    //     password: [rem.password, [Validators.required, Validators.minLength(8)]]
    //   });
    // }

  

  // get f(){return this.loginForm.controls;}

  // // Login Service
  // invalidLogin= false;
  // errorMessage;
  // successMessage;

  // onSubmit(){
  //   debugger
  //   if($('#rememberMe').is(':checked')){
  //     let remember={
  //       email: this.loginForm.value.email,
  //       password: this.loginForm.value.password,
  //     }
  //     window.localStorage.setItem('rememberMe', JSON.stringify(remember));
  //   }else{
  //     window.localStorage.removeItem('rememberMe');
  //   }
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.loginForm.invalid) {
  //       return;
  //   }
  //   let data = {
  //     email_id: this.loginForm.value.email,
  //     password: this.loginForm.value.password
  //   }
  //   this.auth.login(data).subscribe(
  //     data=> {
  //       debugger
  //       this.toastr.success('Login Successfully');
  //       // console.log(data['message'], "===================")
  //       localStorage.setItem('currentUser', JSON.stringify(data['response']));
  //       this.successMessage = data['message']
  //       this.router.navigateByUrl('/home/dashboard');
  //     },
  //     error=> {
  //       console.log(error);
  //       this.invalidLogin = true
  //       this.errorMessage = error.error.message
  //       this.toastr.error(error.error.message);
  //       debugger
  //     }
  //   );
  // }

}
