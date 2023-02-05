import { Observable } from 'rxjs';
import { Client } from './Client';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl="http://localhost:8080/api";
  constructor(private http:HttpClient) { }

  public saveClient(c:Client):Observable<Client>{
    return this.http.post(`${this.baseUrl}/saveClient`,c);
  }

  public listClient():Observable<Client []>{
    return this.http.get<Client []>(`${this.baseUrl}/clients`);
  }
}
