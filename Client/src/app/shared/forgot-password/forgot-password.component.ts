import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './../../service/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPassword: FormGroup;
  submitted= false;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService, 
    private toastr : ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.forgotPassword = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]]
    })
  }

  get f(){return this.forgotPassword.controls;}

  // Forgot Service
  invalidEmail= false;
  errorMessage;
  successMessage;

  onSubmit(){
    this.submitted=true;

    // stop here if form is invalid
    if(this.forgotPassword.invalid){
      return;
    }

    debugger
    this.auth.forgot(this.forgotPassword.value.email_id).subscribe(
      data=>{
        debugger
        this.toastr.success('An email Link has been sent to your email id please follow the instruction to reset password');

        this.router.navigateByUrl('/reset-password');
        localStorage.setItem('forgot', JSON.stringify(this.forgotPassword.value.email_id));
        this.successMessage = data['message']
      },
      error=>{
        console.log(error);
        this.invalidEmail = true
        this.errorMessage = error.error.message
        this.toastr.error(error.error.message);
        debugger
      }
      
    )
  }

}
