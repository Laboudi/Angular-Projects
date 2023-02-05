import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from './../client.service';
import { Client } from './../Client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  client:Client;
  constructor(private clientService:ClientService,private router:Router,private route:ActivatedRoute) {
    this.client=new Client();
   }

  ngOnInit(): void {
  }
  onSubmit(){
    return this.clientService.saveClient(this.client).subscribe(data=>{
      this.router.navigate(['/createClient']);
    })
  }
}
