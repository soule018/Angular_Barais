import { TestBed } from '@angular/core/testing';

import { PockeAPIServiceService } from './pocke-apiservice.service';

describe('PockeAPIServiceService', () => {
  let service: PockeAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PockeAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
