import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService{

    constructor(
        private router: Router,
        private http: HttpClient
    ){}
    
    register(body:any){
        return this.http.post('http://localhost:3000/admin/addAdmin',body,{
          observe: "body",
          headers:new HttpHeaders().append('Content-Type','application/json')
        });
    }

    login(body:any){
        return this.http.post('http://localhost:3000/admin/login',body,{
            observe: "body",
            withCredentials:true,
            headers:new HttpHeaders().append('Content-Type','application/json')
          });
    }

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
    userlist(){
        return this.http.get(environment.baseUrl+`userList`);
    }
    deleteUser(data){
    return this.http.post(environment.baseUrl+'delete', data)
    }
    blockUnblock(data) {
    return this.http.post(environment.baseUrl+'block', data)

    }
    Unblockblock(data) {
    return this.http.post(environment.baseUrl+'Unblockblock', data)

    }
    
}