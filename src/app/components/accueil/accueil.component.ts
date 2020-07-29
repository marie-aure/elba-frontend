import { Component, OnInit } from '@angular/core';
import { TransverseService } from 'src/app/service/transverse.service';
import { Famille } from 'src/app/model/famille';
import { Tour } from 'src/app/model/tour';
import { TourService } from 'src/app/service/tour.service';
import { FamilleService } from 'src/app/service/famille.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.less']
})
export class AccueilComponent implements OnInit {

  constructor(private transverseService:TransverseService, private tourService:TourService, private familleService: FamilleService) {}
  tour:Tour;

  ngOnInit() {
    this.transverseService.updateTitle("Elba City");
    this.tourService.findTourEnCours().subscribe(data => {console.log(data); this.tour = data;});  
  }

}
