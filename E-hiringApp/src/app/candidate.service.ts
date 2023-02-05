import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from './Candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private baseURL = "http://localhost:8080/api";
  constructor(private http:HttpClient) {
  }
  public saveCandidate(candidate:Candidate):Observable<Object>{
    let formParam=new FormData();
    return this.http.post(`${this.baseURL}/saveCandidate`,candidate);
  }
  public findAllCandidate():Observable<Candidate[]>{
      return this.http.get<Candidate[]>(`${this.baseURL}/listCandidates`);
  }
  public updateCandidate(id?: number,candidate?:Candidate): Observable<Candidate>{
    return this.http.put(`${this.baseURL}/candidates/${id}`,candidate);
  }
  public getCandidateById(id?:number):Observable<Candidate>{
    return this.http.get<Candidate>(`${this.baseURL}/candidate/${id}`);
  }
}
