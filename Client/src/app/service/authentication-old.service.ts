import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService{

    constructor(
        private router: Router,
        private http: HttpClient
    ){}
    
    
    isLogin(){
        var token;
        var remembered = localStorage.getItem('rememberMe');
        if(remembered==undefined){
            token = sessionStorage.getItem('currentUser');
        }else{
            token = localStorage.getItem('currentUser');
        }
        
        if(token) return true;
        else false;
    }

    login(data){
        return this.http.post(environment.baseUrl+`login`, data);
    }

    forgot(email_id: string) {
        return this.http.post(environment.baseUrl+`forget/password`, { email_id });
    }

    verify(data) {
        return this.http.post(environment.baseUrl+`forgotpass_otp_verify_email`, data);
    }

    reset(data) {
        return this.http.post(environment.baseUrl+`resetpassword`, data);
    }

    changePassword(data){
        return this.http.post(environment.baseUrl+`forgotpass_reset`, data);
    }

    profile(data) {
        debugger
        
        return this.http.post(environment.baseUrl+`profile`, data);
    }
    

    logout(){
        localStorage.removeItem('currentUser');
        localStorage.removeItem('rememberMe');
        this.router.navigateByUrl('login');
        return true;
    }
}