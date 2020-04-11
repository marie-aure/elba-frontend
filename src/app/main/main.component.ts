import { Component, OnInit } from '@angular/core';
import { TitreService } from '../service/titre.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  titre:string;

  constructor(private titreService:TitreService) { 
    titreService.change.subscribe(data => {this.titre = data});
  }

  ngOnInit() {
  }

}
