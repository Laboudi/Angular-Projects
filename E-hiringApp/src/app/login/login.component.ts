import { UserAuthService } from './../user-auth.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private userService:UserService,private authService:UserAuthService) { }

  ngOnInit(): void {
  }
  
  login(loginForm:NgForm){
     this.userService.login(loginForm.value).subscribe(
      (response:any)=>{
        console.log(response);
        this.authService.setRoles(response.user.role);
        this.authService.setToken(response.token);
        if(response.user.role[0].roleName === "ADMIN"){
          this.router.navigate(["/adminPage"]);
        }else{
          this.router.navigate(["/userPage"]);
        }
      },
      (error)=>{console.log(error)}
     );
  }
}
