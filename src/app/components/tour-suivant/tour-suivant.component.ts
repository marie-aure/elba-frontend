import { Component, OnInit } from '@angular/core';
import { TransverseService } from 'src/app/service/transverse.service';
import { FormBuilder } from '@angular/forms';
import { TourService } from 'src/app/service/tour.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour-suivant',
  templateUrl: './tour-suivant.component.html',
  styleUrls: ['./tour-suivant.component.less']
})
export class TourSuivantComponent implements OnInit {

  tourSuivantForm;
  argentIG: number; 

  constructor(private transverseService:TransverseService, private tourService:TourService, private formBuilder: FormBuilder, private router:Router) 
  { 
    this.tourSuivantForm = this.formBuilder.group({
      argentIG: ''
    });
  }

  ngOnInit() {
    this.transverseService.updateTitle("Tour suivant");
  }

  onSubmit(data) {
    this.tourService.endTourEnCours(data.argentIG).subscribe(rep => {
      this.router.navigate(['./accueil'])
    });
  }

  cancel() { 
    this.router.navigate(['./accueil'])
  }


}
