import { Candidate } from './Candidate';
export class Client{
    id?:number;
    nameOfCompany?:string;
    companyPhone?:string;
    companyEmail?:string;
    logo?:string;
    candidates? :Candidate[];
    constructor(ncandidates? :Candidate[],nameOfCompany?:string,companyPhone?:string,companyEmail?:string,logo?:string){
      this.nameOfCompany=nameOfCompany;
      this.companyPhone=companyPhone;
      this.companyEmail=companyEmail;
      this.logo=logo;
      this.candidates=this.candidates;
    }
}
