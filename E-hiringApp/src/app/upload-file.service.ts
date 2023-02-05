import { Candidate } from './Candidate';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  baseUrl:string="http://localhost:8080";
  constructor(private http:HttpClient) {
   }
  public uploadFile(file:File){
    let formParam=new FormData();
    formParam.append('file',file);
    return this.http.post("http://localhost:8080/api/upload",formParam);
  }
  download(id:number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${id}`, {
      responseType: 'blob'
    })
}
}
