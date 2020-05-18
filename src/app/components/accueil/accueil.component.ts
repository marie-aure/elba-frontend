import { Component, OnInit } from '@angular/core';
import { TitreService } from 'src/app/service/titre.service';
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

  constructor(private titreService:TitreService, private tourService:TourService, private familleService: FamilleService) {}
  tour:Tour;

  ngOnInit() {
    this.titreService.updateTitle("Elba City");
    this.tourService.findTourEnCours().subscribe(data => {console.log(data); this.tour = data;});
  }

}
