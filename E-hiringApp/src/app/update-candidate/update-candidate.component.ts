import { Candidate } from './../Candidate';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent implements OnInit {
  /*id:number=0;
  
    constructor(private candidateService:CandidateService,private router:Router,private route:ActivatedRoute) { }
*/
  ngOnInit(): void {
    //.id=this.route.snapshot.params['id'];
    //this.candidateService.getCandidateById(this.id).subscribe(data=>this.candidat=data);
  }
 /* onSubmit(){
    //this.candidateService.updateCandidate(this.id, this.candidat).subscribe( data =>{
      //this.router.navigate(['/candidates']);;
    //});
  }*/

}
