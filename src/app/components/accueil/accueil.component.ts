import { Component, OnInit } from '@angular/core';
import { TransverseService } from 'src/app/service/transverse.service';
import { Tour } from 'src/app/model/tour';
import { TourService } from 'src/app/service/tour.service';
import { Famille } from 'src/app/model/famille';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.less']
})
export class AccueilComponent implements OnInit {

  tour:Tour;

  constructor(private transverseService:TransverseService, private tourService:TourService) {}


  ngOnInit() {
    this.tour = new Tour(0,0,new Famille(0,"",0,"",0,null,null,null));
    this.transverseService.updateTitle("Elba City");
    this.tourService.findTourEnCours().subscribe(data => {console.log(data); this.tour = data;});
  }

}
