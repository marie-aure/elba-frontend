import { Component, OnInit } from '@angular/core';
import { Famille } from 'src/app/model/famille';
import { Pret } from 'src/app/model/pret';
import { PretService } from 'src/app/service/pret.service';

import { TourService } from 'src/app/service/tour.service';
import { TransverseService } from 'src/app/service/transverse.service';

@Component({
  selector: 'app-gestion-finance',
  templateUrl: './gestion-finance.component.html',
  styleUrls: ['./gestion-finance.component.less']
})
export class GestionFinanceComponent implements OnInit {

  constructor(private transverseService:TransverseService, private tourService:TourService, private pretService:PretService) { }
  famille:Famille = new Famille(0,"",0,"",0,null,null,null); 
  prets:Pret[];

  ngOnInit() {
    this.transverseService.updateTitle("Elba City");
    this.tourService.findTourEnCours().subscribe(data => {console.log(data); this.famille = data.famille;
      this.pretService.findPretByFamille(this.famille).subscribe(data => {console.log(data);this.prets = data});
    });
    
  }



}
