import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import {TypeaheadService}  from './services/typeahead.service';

@NgModule({
  declarations: [
    AppComponent,
    CountrylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TypeaheadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
