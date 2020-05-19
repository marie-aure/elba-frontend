import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Famille } from '../model/famille';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FamilleService {

  constructor(private http: HttpClient) { }

  findAllFamille(): Observable<Famille[]> {
    return this.http.get("http://localhost:8080/api/famille/getAll").pipe(
      map(
        (jsonArray: Famille[]) =>
          jsonArray.map(jsonItem => new Famille(
            jsonItem.id,
            jsonItem.nom,
            jsonItem.generation,
            jsonItem.argentIG,
            jsonItem.chef,
            jsonItem.lMembres,
            jsonItem.lMembresOrigine
          ))
      )
    ); 
  }

/*   findFamilleEnCours(): Observable<Famille> {
    return this.http.get<Famille>("http://localhost:8080/api/famille/getFamilleEnCours").pipe(
      map(data => new Famille(
        data.id,
        data.nom,
        data.generation,
        data.argentIG,
        data.chef,
        data.lMembres,
        data.lMembresOrigine
      ))
    );
  } */

}
