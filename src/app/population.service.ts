import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PopulationService {

  constructor(private _http: HttpClient) { }
  
    populationbyCountry() {
      return this._http.get("http://api.population.io/1.0/population/2017/aged/99/")
        .map(result => result);
    }

}