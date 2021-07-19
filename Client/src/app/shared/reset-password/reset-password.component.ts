import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './../../service/authentication.service'
import { Router } from '@angular/router';
import { MustMatch } from './../../service/mustMatch';
import { ToastrService } from 'ngx-toastr';
declare var $:any;
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPassword: FormGroup;
  submitted= false;
  
  constructor(
    private formBuilder: FormBuilder, 
    private auth: AuthenticationService, 
    private toastr : ToastrService,
    private router: Router
  ) { }

  ngOnInit() {

    this.resetPassword = this.formBuilder.group({
      newPassword:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:['', [Validators.required, Validators.minLength(8)]]
    },{
      validators: MustMatch('newPassword', 'confirmPassword')
    });

  }

  get f(){return this.resetPassword.controls}

  // Forgot Service
  errorMessage;
  successMessage;

  onSubmit(){
    this.submitted=true;
    if(this.resetPassword.invalid){
      return;
    }

    let data={
      email: JSON.parse(localStorage.getItem('forgot')),
      password: this.resetPassword.value.confirmPassword
    }
    this.auth.reset(data).subscribe(
      data=>{
        console.log(data)
        debugger
        $("#success-modal").modal('show');        
        this.successMessage = data['message'];
        setTimeout(function(){
          $("#success-modal").modal('hide');
        },1500);
        setTimeout(() => {
          this.toastr.success('Password has been changed Successfully');
          this.router.navigateByUrl('/login');
        }, 1600);
        localStorage.removeItem('forgot');
      },
      error=>{
        console.log(error);
        this.errorMessage = error.error.message
        this.toastr.error(error.error.message);
        debugger
      }
    )
  }
}
