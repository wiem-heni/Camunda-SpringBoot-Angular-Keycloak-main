import { Component, OnInit } from '@angular/core';
import { ScolariteService } from '../scolarite.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
})
export class EtudiantComponent implements OnInit {

  public etudiantIng;
  public etudiantLsc;

  constructor(private scolariteService:ScolariteService) {
  }

  ngOnInit() {
    this.scolariteService.getEtudiantIngenieur().subscribe(
      data => {this.etudiantIng = data; console.log(this.etudiantIng);}
    );
    this.scolariteService.getEtudiantLicence().subscribe(
      data => { this.etudiantLsc = data; 
        console.log(this.etudiantIng)} 
    );
    
  }


}
