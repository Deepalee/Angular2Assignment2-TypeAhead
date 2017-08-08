import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TypeaheadService {

  constructor(public httpSvc:Http) {
      
   }

  getCountryListFromApi():Observable<any>{
      return this.httpSvc.get("./app/api/countrylist.json")
      .map((response)=>response.json())
      .catch((error)=>Observable.throw(error.json()));
  }

}
