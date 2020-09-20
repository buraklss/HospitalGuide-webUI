/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CountryserviceService } from './countryservice.service';

describe('Service: Countryservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryserviceService]
    });
  });

  it('should ...', inject([CountryserviceService], (service: CountryserviceService) => {
    expect(service).toBeTruthy();
  }));
});
