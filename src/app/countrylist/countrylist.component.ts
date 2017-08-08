import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { TypeaheadService } from '../services/typeahead.service';
import { Debounce } from 'angular2-debounce';
import 'rxjs/Rx';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})

export class CountrylistComponent implements OnInit {
  public query = '';
  public countries;
  public filteredCountryList = [];
  public elementRef;

  constructor(myElement: ElementRef, typeaheadSrv: TypeaheadService) {
    this.elementRef = myElement;
    typeaheadSrv.getCountryListFromApi()
      .debounceTime(300)
      .flatMap(result => typeaheadSrv.getCountryListFromApi())
      .subscribe((result) => {
        this.countries = result.countries;
        console.log(JSON.stringify(result));
      },
      error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

  filter() {
    if (this.query.length === 3 || this.query.length > 3) {
      this.filteredCountryList = this.countries.filter(function (el) {
        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredCountryList = [];
    }
  }

  select(country) {
    this.query = country;
    this.filteredCountryList = [];
  }

}

