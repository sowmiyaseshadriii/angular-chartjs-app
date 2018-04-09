import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PopulationService {

  constructor(private _http: HttpClient) { }
  
    populationbyCountry() {
      return this._http.get("https://api.myjson.com/bins/t8csj")
        .map(result => result);
    }

}