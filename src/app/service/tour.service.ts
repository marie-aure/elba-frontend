import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tour } from '../model/tour';
import { map } from 'rxjs/internal/operators/map';
import { Famille } from '../model/famille';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient) { }

  findTourEnCours():Observable<Tour>{
    return this.http.get<Tour>("http://localhost:8080/api/tour/getTourEnCours").pipe(
      map(data => new Tour(
        data.numero,
        data.semaine,
       data.famille
      )
    ));
  }

  /* endTourEnCours(argentIG:number):Observable<Tour>{
    console.log('here');
    console.log("http://localhost:8080/api/tour/endTourEnCours/"+argentIG);
    return this.http.get<Tour>("http://localhost:8080/api/tour/endTourEnCours").pipe(
      map(data => new Tour(
        data.numero,
        data.semaine,
       data.famille
      )
    ));

  } */
  endTourEnCours(argentIG: number){
    return this.http.get("http://localhost:8080/api/tour/endTourEnCours/"+argentIG);
  }
}
