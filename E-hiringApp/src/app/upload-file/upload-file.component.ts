import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  file: File={} as File;
  constructor(private uploadService:UploadFileService) {
   }

  ngOnInit(): void {
  }
  onFilechange(event:any){
    console.log(event.target.files[0]);
    this.file=event.target.files[0];
  }
  /*upload(){
    if(this.file){
      this.uploadService.uploadFile(this.file).subscribe(res=>{
        alert("Uploaded");
      })
    }else{
      alert("Please select a file first");
    }
  }*/
}
