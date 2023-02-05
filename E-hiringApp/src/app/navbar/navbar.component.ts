import { UserService } from './../user.service';
import { UserAuthService } from './../user-auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,
    private userAuthService:UserAuthService,
    public userService:UserService) { }

  ngOnInit(): void {
  }
  addCandidate(){
    this.router.navigate(["/createCandidate"]);
  }
  addClient(){
    this.router.navigate(["/createClient"]);
  }
  list(){
    this.router.navigate(["/candidates"]);
  }
  public logout(){
    this.userAuthService.clear();
    this.router.navigate(["/home"]);
  }

}
