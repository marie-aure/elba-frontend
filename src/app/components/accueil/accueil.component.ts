import { Component, OnInit } from '@angular/core';
import { TitreService } from 'src/app/service/titre.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.less']
})
export class AccueilComponent implements OnInit {

  constructor(private titreService:TitreService) { }

  ngOnInit() {
    this.titreService.updateTitle("Elba City");
  }

}
