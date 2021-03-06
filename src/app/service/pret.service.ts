import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Famille } from '../model/famille';
import { Pret } from '../model/pret';

@Injectable({
  providedIn: 'root'
})
export class PretService {

  constructor(private http: HttpClient) { }


findPretByFamille(famille:Famille): Observable<Pret[]> {
  return this.http.get("http://localhost:8080/api/pret/getByFamille/"+famille.id).pipe(
    map(
      (jsonArray: Pret[]) =>
        jsonArray.map(jsonItem => new Pret(
          jsonItem.id,
          jsonItem.somme,
          jsonItem.taux,
          jsonItem.interets,
          jsonItem.restant,
          jsonItem.rembourse
        ))
    )
  ); 
}
}