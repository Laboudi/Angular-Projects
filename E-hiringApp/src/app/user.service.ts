import { UserAuthService } from './user-auth.service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string="http://localhost:8080";

    requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
    constructor(
      private httpclient: HttpClient,
      private userAuthService: UserAuthService
    ) {}
  
    public login(loginData:any) {
      return this.httpclient.post(this.baseUrl + '/authenticate', loginData, {
        headers: this.requestHeader,
      });
    }
  
    public forUser() {
      return this.httpclient.get(this.baseUrl + '/forUser', {
        responseType: 'text',
      });
    }
  

    public register(userData:any){
      return this.httpclient.post(this.baseUrl+'/registerNewUser',userData,{
        headers:this.requestHeader,
      });
    }
    public forAdmin() {
      return this.httpclient.get(this.baseUrl + '/forAdmin', {
        responseType: 'text',
      });
    }
  
    public roleMatch(allowedRoles:string []): boolean {
      let isMatch;
      const userRoles: any = this.userAuthService.getRoles();
  
      if (userRoles != null && userRoles) {
        for (let i = 0; i < userRoles.length; i++) {
          for (let j = 0; j < allowedRoles.length; j++) {
            if (userRoles[i].roleName === allowedRoles[j]) {
              isMatch = true;
              
            } else {
              isMatch=false;
            }
          }
        }
      }
      return isMatch as boolean;
    }
  }
