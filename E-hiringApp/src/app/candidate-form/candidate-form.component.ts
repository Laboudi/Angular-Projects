import { UploadFileService } from './../upload-file.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Candidate } from '../Candidate';
import { CandidateService } from '../candidate.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {
  file:File={} as File;
  candidate:Candidate;
  constructor(private candidateService:CandidateService,private router:Router,private route :ActivatedRoute,private uploadService:UploadFileService) {
    this.candidate=new Candidate();
   }

  ngOnInit(): void {
  }
  onUpload(){
    if(this.candidate.Cv){
      this.uploadService.uploadFile(this.candidate.Cv).subscribe(res=>{
        alert("Uploaded");
      })
    }else{
      alert("Please select a file first");
    }
  }
  onSelectFile(event:any){
    const file=event.target.files[0];
    this.candidate.Cv=file;
    console.log(this.candidate.Cv);
  }
  /*onSubmit(){
    return this.uploadService.uploadFile(this.candidate,this.candidate.Cv!).subscribe(result=>{
      this.router.navigate(["/candidates"]);
    });
  }*/
  onSubmit(){
    return this.candidateService.saveCandidate(this.candidate).subscribe(result=>{
      this.onUpload();
      this.router.navigate(["/candidates"]);
    })
  }

}
