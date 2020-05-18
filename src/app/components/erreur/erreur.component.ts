import { Component, OnInit } from '@angular/core';
import { TransverseService } from 'src/app/service/transverse.service';

@Component({
  selector: 'app-erreur',
  templateUrl: './erreur.component.html',
  styleUrls: ['./erreur.component.less']
})
export class ErreurComponent implements OnInit {

  titre = 'Erreur'

  constructor(private transverseService:TransverseService) { }

  ngOnInit() {
    this.transverseService.updateTitle("Erreur");
  }

}
