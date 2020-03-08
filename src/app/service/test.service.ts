import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../model/test';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  findAllTest():Observable<Test[]> {
    return this.http.get("http://localhost:8080/api/test/getAll").pipe(
      map(
        (jsonArray: Test[]) => 
        jsonArray.map(jsonItem => new Test(
          jsonItem.id,
          jsonItem.label, 
          jsonItem.re))
      )
    );
}

}