import { Client } from './Client';
export class Candidate{
    id?:number;
    firstName?:string;
    lastName?:string;
    profil?:string;
    entrepriseActuel?:string;
    salaireActuel?:number;
    pretentionSalaire?:number;
    contrat?:string;
    anciennete?:number;
    ville?:string;
    Cv?:File;
    fileName?:string;
    preselection?:string;
    decisionRh?:string;
    decisionTech?:string;
    decisionFinal?:string;
    comment?:string;
    clients?:Client[];


    constructor(id?:number,fileName?:string,firstName?:string,lastName?:string,profil?:string,entrepriseActuel?:string,anciennete?:number,salaireActuel?:number,
    pretentionSalaire?:number,contrat?:string,ville?:string,Cv?:File,preselection?:string,decisionRh?:string,decisionFinal?:string,
    comment?:string,decisionTech?:string,clients?:Client[]){
                    this.id=id;
                    this.firstName=firstName;
                    this.lastName=lastName;
                    this.profil=profil;
                    this.entrepriseActuel=entrepriseActuel;
                    this.anciennete=anciennete;
                    this.salaireActuel=salaireActuel;
                    this.pretentionSalaire=pretentionSalaire;
                    this.contrat=contrat;
                    this.ville=ville;
                    this.Cv=Cv;
                    this.fileName=fileName;
                    this.preselection=preselection;
                    this.decisionRh=decisionRh;
                    this.decisionFinal=decisionFinal;
                    this.comment=comment;
                    this.decisionTech=decisionTech;
                    this.clients=clients;
      }
}
