/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TypeaheadService } from './typeahead.service';

describe('TypeaheadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeaheadService]
    });
  });

  it('should ...', inject([TypeaheadService], (service: TypeaheadService) => {
    expect(service).toBeTruthy();
  }));
});
