import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erreur',
  templateUrl: './erreur.component.html',
  styleUrls: ['./erreur.component.less']
})
export class ErreurComponent implements OnInit {

  titre = 'Erreur'

  constructor() { }

  ngOnInit() {
  }

}
