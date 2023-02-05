import { Router } from '@angular/router';
import { UserAuthService } from './../user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private userAuth:UserAuthService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.userAuth.clear();
    this.router.navigate(["/home"])
  }

}
