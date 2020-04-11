import { Component, OnInit } from '@angular/core';
import { TitreService } from 'src/app/service/titre.service';

@Component({
  selector: 'app-erreur',
  templateUrl: './erreur.component.html',
  styleUrls: ['./erreur.component.less']
})
export class ErreurComponent implements OnInit {

  titre = 'Erreur'

  constructor(private titreService:TitreService) { }

  ngOnInit() {
    this.titreService.updateTitle("Erreur");
  }

}
