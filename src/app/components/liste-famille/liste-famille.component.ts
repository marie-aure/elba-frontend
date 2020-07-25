import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FamilleService } from 'src/app/service/famille.service';
import { Famille } from 'src/app/model/famille';
import { TransverseService } from 'src/app/service/transverse.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-liste-famille',
  templateUrl: './liste-famille.component.html',
  styleUrls: ['./liste-famille.component.less']
})
export class ListeFamilleComponent implements OnInit {

  lFamilles:Famille[];
  dataSource = new MatTableDataSource(this.lFamilles);
  displayedColumns:String[] = [
    "id",
    "nom",
    "generation",
    "classe",
    "chef"];

  constructor(private transverseService:TransverseService, private familleService:FamilleService) { }

  ngOnInit() {
    this.transverseService.updateTitle("Liste des familles");
    this.familleService.findAllFamille().subscribe(data => this.lFamilles = data);
    this.dataSource.data = this.lFamilles;
  }

}
