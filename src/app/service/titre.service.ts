import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitreService {

private emitChangeTitre = new Subject<string>();

change = this.emitChangeTitre.asObservable();

updateTitle(titre: string){
    this.emitChangeTitre.next(titre);
  }
}
