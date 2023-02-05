import { UserService } from './../user.service';
import { UploadFileService } from './../upload-file.service';
import { Candidate } from './../Candidate';
import { CandidateService } from './../candidate.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})

export class CandidateListComponent implements OnInit,AfterViewInit {
  candidates:Candidate[]=new Array();
  candidat?:Candidate;
  id?:number;
  dataSource!:MatTableDataSource<any>;
  displayedColumns:string[]=['FirstName','LastName','Profile','CurrentCompany','Seniority','CurrentSalary','SalaryExpectation','Contract','City','Preselection','RHDecision','TechDecision','FinalDecision','Comment'];
  constructor(public userService:UserService,private uploadService:UploadFileService,private candidateService:CandidateService,private router:Router,private route:ActivatedRoute) {
    this.candidat=new Candidate();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    console.log("entering ngOnInit method...");
    this.candidateService.findAllCandidate().subscribe(data=>{this.dataSource=new MatTableDataSource(data)});
  }
  logout(){
    this.router.navigate(['/home'])
  }
  onChangePreselection(preselection?:string,id?:number){
    console.log(preselection+" "+id);
    this.candidateService.getCandidateById(id).subscribe(data=>{
      console.log("condidate avant l'affectation :");
      console.log(this.candidat);
      this.candidat=data;
      console.log("candidate apres l'affectation :");
      console.log(this.candidat);
      console.log(this.candidat.preselection);
      this.candidat.preselection=preselection;
      console.log(this.candidat.preselection);
      this.candidateService.updateCandidate(id,this.candidat).subscribe( data =>{
        this.router.navigate(['/candidates']);
      });
    });
  }
  onChangeDecisionRh(value?:string,id?:number){
    this.id=id;
    console.log(value+" "+id);
    this.candidateService.getCandidateById(this.id).subscribe(data=>{
      console.log("condidate avant l'affectation :");
      console.log(this.candidat);
      this.candidat=data;
      console.log("candidate apres l'affectation :");
      console.log(this.candidat);
      console.log(this.candidat.decisionRh);
      this.candidat.decisionRh=value;
      console.log(this.candidat.decisionRh);
      this.candidateService.updateCandidate(this.id,this.candidat).subscribe( data =>{
        this.router.navigate(['/candidates']);
      });
    });

  }
  onChangeDecisionTech(value?:string,id?:number){
    console.log(value+" "+id);
    this.candidateService.getCandidateById(id).subscribe(data=>{
      console.log("condidate avant l'affectation :");
      console.log(this.candidat);
      this.candidat=data;
      console.log("candidate apres l'affectation :");
      console.log(this.candidat);
      console.log(this.candidat.decisionTech);
      this.candidat.decisionTech=value;
      console.log(this.candidat.decisionTech);
      this.candidateService.updateCandidate(id,this.candidat).subscribe( data =>{
        this.router.navigate(['/candidates']);
      });
    });

  }
  onChangeDecisionFinal(value?:string,id?:number){
    console.log(value+" "+id);
    this.candidateService.getCandidateById(id).subscribe(data=>{
      console.log("condidate avant l'affectation :");
      console.log(this.candidat);
      this.candidat=data;
      console.log("candidate apres l'affectation :");
      console.log(this.candidat);
      console.log(this.candidat.decisionFinal);
      this.candidat.decisionFinal=value;
      console.log(this.candidat.decisionFinal);
      this.candidateService.updateCandidate(id,this.candidat).subscribe( data =>{
        this.router.navigate(['/candidates']);
      });
    });

  }
  onChangeComment(value?:string,id?:number){
    console.log(value+" "+id);
    this.candidateService.getCandidateById(id).subscribe(data=>{
      console.log("condidate avant l'affectation :");
      console.log(this.candidat);
      this.candidat=data;
      console.log("candidate apres l'affectation :");
      console.log(this.candidat);
      console.log(this.candidat.comment);
      this.candidat.comment=value;
      console.log(this.candidat.comment);
      this.candidateService.updateCandidate(id,this.candidat).subscribe( data =>{
        this.router.navigate(['/candidates']);
      });
    });

  }
  download(id:number){
    this.uploadService.download(id).subscribe(result=>{
      this.router.navigate(["/candidates"]);
    })
  }
  addCandidate(){
    this.router.navigate(["/createCandidate"]);
  }
  selectItems :string[]=["Go","NoGo","NRP"] ;
}
