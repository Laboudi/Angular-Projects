import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  register(registerForm:NgForm){
    this.userService.register(registerForm.value).subscribe((response:any)=>{
      console.log(response);
      this.router.navigate(['/login']);
    });
  }
}
